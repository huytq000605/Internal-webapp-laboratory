/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import 'reflect-metadata';
import { Db, MongoClient } from 'mongodb';
import {
	CLIENT_ID,
	DATABASE_INSTANCE_KEY,
	DB_URL_STRING,
	logger,
	PORT,
} from './config';
import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import { database, up } from 'migrate-mongo';
import { getApolloServer, getGraphqlSchema } from './apolloServer';
import { createServer } from 'http';
import Container from 'typedi';
import path from 'path';
import { graphqlUploadExpress } from 'graphql-upload';
import '@root/dependencyInjections';

const app = express();
const client = new OAuth2Client(CLIENT_ID);

const bootstrap = async () => {
	try {
		const { db, client } = await database.connect();
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		await up(db, client);
		logger.info('Migratate database successfully');
		Container.set(DATABASE_INSTANCE_KEY, db);
	} catch (error) {
		logger.error(error);
		throw new Error(error);
	}

	const schema = await getGraphqlSchema();

	const apolloServer = getApolloServer(schema);

	const oneMegaBytes = 1 * 1000 * 1000;

	app.use(
		graphqlUploadExpress({
			maxFieldSize: 10000000,
			maxFileSize: 10 * oneMegaBytes,
		})
	);

	if (process.env.NODE_ENV === 'dev') {
		app.use(express.static(path.join(__dirname, '../upload/')));
	}

	app.use(async (req, res, next) => {
		try {
			if (
				req.headers.authorization &&
				req.headers.authorization.split(' ')[0] === 'Bearer'
			) {
				const token = req.headers.authorization.split(' ')[1];
				const ticket = await client.verifyIdToken({
					idToken: token,
					audience: process.env.GOOGLE_CLIENT_ID_WEB, // Specify the CLIENT_ID of the app that accesses the backend
					// Or, if multiple clients access the backend:
					//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
				});

				const payload = ticket.getPayload();
				if (payload?.email_verified) {
					const user = await (Container.get(
						DATABASE_INSTANCE_KEY
					) as Db)
						.collection('users')
						.findOne({ email: payload.email });
					if (user) {
						(req as any).user = {
							id: user._id,
							name: user.name,
							roles: user.roles,
							avatar: payload.picture,
							email: payload.email,
							googleId: payload.sub,
						};
					}
					(req as any).google = {
						id: payload?.sub,
						name: payload?.name,
						avatar: payload?.picture,
						email: payload?.email,
					};
				}
			}
			next();
		} catch (error) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(req as any).authError = new Error(error);
			logger.error(error.message);
			next();
		}
	});

	apolloServer.applyMiddleware({ app });

	const server = createServer(app);

	apolloServer.installSubscriptionHandlers(server);

	server.listen(PORT, () => {
		logger.info(
			`Server is running, Graphql Playground is available at port ${PORT}`
		);
	});

	return apolloServer;
};

MongoClient.connect(
	DB_URL_STRING,
	{
		useUnifiedTopology: true,
	},
	(error) => {
		if (error) {
			logger.error(error.message);
			process.exit(1);
		}
		logger.info('Connected successfully to database');
		bootstrap();
	}
);
