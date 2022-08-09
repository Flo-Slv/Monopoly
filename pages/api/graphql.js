import { ApolloServer } from 'apollo-server-micro';
import micro_cors from 'micro-cors';

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

// CORS
const cors = micro_cors({
	origin: "https://studio.apollographql.com",
	allowCredentials: true,
	allowMethods: ["GET", "POST","PUT","DELETE"],
	allowHeaders: ["access-control-allow-credentials","access-control-allow-origin","content-type"]          
});

// Run server
const handler = cors(async (req, res) => {
	await apolloServer.start();

	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}

	await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});

export default handler;
