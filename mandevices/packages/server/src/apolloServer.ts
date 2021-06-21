import 'reflect-metadata';
import { AuthChecker, buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { GraphQLSchema } from 'graphql';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { Container } from 'typedi';
import { applyMiddleware } from 'graphql-middleware';
import { Duties } from './domains/duties/dataSources/DutyMongoDataSource';

import { GraphqlContext } from './global';
import { authorization } from './domains/authorization/middleware';

const defaultContext = (ctx: ExpressContext) => {
	return {
		user: (ctx.req as any).user ? (ctx.req as any).user : null,
		google: (ctx.req as any).google ? (ctx.req as any).google : null,
	};
};

const authChecker: AuthChecker<GraphqlContext> = (
	{ context: { user, authError } },
	roles
) => {
	// console.log(roles);
	const authenticated = true;
	const unAuthenticated = false;

	const isRequireRoleCheck = roles.length !== 0;

	if (authError) return unAuthenticated;

	if (!isRequireRoleCheck) {
		return user ? authenticated : unAuthenticated;
	}
	if (!user) {
		return unAuthenticated;
	}

	return unAuthenticated;
};

export const getGraphqlSchema = async (): Promise<GraphQLSchema> => {
	const globPathNameToGraphQLResolverFiles = '**/api/**/+([A-Za-z]).{ts,js}';

	return buildSchema({
		resolvers: [path.join(__dirname, globPathNameToGraphQLResolverFiles)],

		emitSchemaFile: path.resolve(__dirname, '../../webApp/schema.graphql'),
		validate: false,
		authChecker,
		container: Container,
	});
};

export const getApolloServer = (
	schema: GraphQLSchema,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	context: typeof defaultContext | Record<string, unknown> = defaultContext
): ApolloServer => {
	const schemaWithMiddleware = applyMiddleware(schema, authorization);

	return new ApolloServer({
		schema: schemaWithMiddleware,
		uploads: false,
		playground: process.env.NODE_ENV === 'production' ? false : true,
		context,
		dataSources: () => {
			return {
				duties: new Duties(),
			};
		},
		subscriptions: {
			path: '/subscription',
		},
	});
};
