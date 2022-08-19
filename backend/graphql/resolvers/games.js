import getGames from '../queries/game/getGames.js';
import getGame from '../queries/game/getGame.js';

import addGameMutation from '../mutations/game/addGameMutation.js';

const gamesResolvers = {
  Query: {
    getGames: async () => {
      return await getGames();
    },
    getGame: async (_, args) => {
      return await getGame(args);
    },
  },
  Mutation: {
    addGame: async (_, __, context) => {
      return await addGameMutation(context);
    },
  },
};

export default gamesResolvers;
