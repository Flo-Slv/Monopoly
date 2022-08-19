import usersResolvers from './users.js';
import gamesResolvers from './games.js';
import gamesHistoryResolvers from './gamesHistory.js';
import resourcesResolvers from './resources.js';

const resolvers = {
  Query: {
    ...usersResolvers.Query,
    ...gamesResolvers.Query,
    ...gamesHistoryResolvers.Query,
    ...resourcesResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...gamesResolvers.Mutation,
  },
};

export default resolvers;
