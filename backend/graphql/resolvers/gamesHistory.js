import getGamesHistoryQuery from '../queries/gameHistory/getGamesHistoryQuery.js';

const gamesHistoryResolvers = {
  Query: {
    getGamesHistory: async () => {
      return await getGamesHistoryQuery();
    }
  }
};

export default gamesHistoryResolvers;
