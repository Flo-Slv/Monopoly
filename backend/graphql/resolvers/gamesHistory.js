import getGamesHistory from '../queries/gameHistory/getGamesHistory.js';

const gamesHistoryResolvers = {
  Query: {
    getGamesHistory: async () => {
      return await getGamesHistory();
    }
  }
};

export default gamesHistoryResolvers;
