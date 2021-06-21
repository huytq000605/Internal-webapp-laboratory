import { getApolloServer, getGraphqlSchema } from '@root/apolloServer';
import { createTestClient } from 'apollo-server-testing';
import { MongoClient } from 'mongodb';
import { GraphqlContext } from '@root/global';
import { DocumentNode } from 'graphql';

interface TestMutation {
	user?: GraphqlContext['user'];
	mutation: DocumentNode;
	variables?: Record<string, unknown>;
}
interface TestQuery {
	user?: GraphqlContext['user'];
	query: DocumentNode;
	variables?: Record<string, unknown>;
}

export const mongoClient = new MongoClient(
	process.env.DB_TEST_URI || 'mongodb://localhost:27017',
	{
		useUnifiedTopology: true,
	}
);

const getServerTest = async ({ user }: { user: GraphqlContext['user'] }) => {
	const server = getApolloServer(await getGraphqlSchema(), { user });
	return createTestClient(server);
};

export const testMutation = async ({
	user,
	mutation,
	variables,
}: TestMutation) => {
	return (await getServerTest({ user })).mutate({ mutation, variables });
};

export const testQuery = async ({ user, query, variables }: TestQuery) => {
	return (await getServerTest({ user })).query({ query, variables });
};
