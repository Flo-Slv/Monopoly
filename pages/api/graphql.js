import { ApolloServer } from 'apollo-server-micro';

import typeDefs from '../../backend/graphql/typeDefs.js';
import resolvers from '../../backend/graphql/resolvers/index.js';

import connectDb from '../../backend/db/config/connectDb.js';

// Connection to DB
connectDb();

// Graphql
const apolloServer = new ApolloServer({
	typeDefs,
	resolvers
	// context: ({ req }) => ({ req }) // let's see if needed ?
});

// Next config
export const config = {
	api: {
		bodyParser: Boolean(false),
	}
};

// Run server
const handler = async (req, res) => {
	await apolloServer.start();
	apolloServer.createHandler({ path: '/api/graphql' })(req, res);
};

export default handler;
