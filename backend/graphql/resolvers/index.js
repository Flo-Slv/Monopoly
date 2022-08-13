import usersResolvers from './users.js';
import gamesHistoryResolvers from './gamesHistory.js';

const resolvers = {
  Query: {
    ...usersResolvers.Query,
    ...gamesHistoryResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation
  }
};

export default resolvers;
