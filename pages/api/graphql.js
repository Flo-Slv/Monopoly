import { ApolloServer } from 'apollo-server-micro';
import micro_cors from 'micro-cors';

import typeDefs from '../../backend/graphql/typeDefs.js';
import resolvers from '../../backend/graphql/resolvers/index.js';

import connectDb from '../../backend/db/config/connectDb.js';
import Resource from '../../backend/db/models/Resource.js';

import { LUCKY_CARDS, COMMUNITY_CHEST_CARDS } from '../../backend/utils/config.js';

// Connection to DB
connectDb();

// Graphql
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({ req }),
});

// Next config
export const config = {
  api: {
    bodyParser: Boolean(false),
  },
};

// CORS
const cors = micro_cors({
  origin: 'https://studio.apollographql.com',
  allowCredentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['access-control-allow-credentials', 'access-control-allow-origin', 'content-type'],
});

const startServer = apolloServer.start();

// Run server
const handler = cors(async (req, res) => {
  await startServer;

  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  // Create default Resources in DB
  Resource.countDocuments({ startingMoney: 1500 }, async (_, count) => {
    if (count <= 0) {
      const newResources = new Resource({
        startingMoney: 1500,
        luckyCards: LUCKY_CARDS,
        communityChestCards: COMMUNITY_CHEST_CARDS,
        nbHostels: 12,
        nbHouses: 12,
      });

      try {
        await newResources.save();
      } catch (err) {
        throw new Error(err);
      }
    }
  });

  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});

export default handler;
