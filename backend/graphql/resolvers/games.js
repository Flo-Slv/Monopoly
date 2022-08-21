import getGamesQuery from '../queries/game/getGamesQuery.js';
import getGameQuery from '../queries/game/getGameQuery.js';

import addGameMutation from '../mutations/game/addGameMutation.js';
import joinGameMutation from '../mutations/game/joinGameMutation.js';
import leaveGameMutation from '../mutations/game/leaveGameMutation.js';
import launchGameMutation from '../mutations/game/launchGameMutation.js';

const gamesResolvers = {
  Query: {
    getGames: async () => {
      return await getGamesQuery();
    },
    getGame: async (_, args) => {
      return await getGameQuery(args);
    },
  },
  Mutation: {
    addGame: async (_, __, context) => {
      return await addGameMutation(context);
    },
    joinGame: async (_, args, context) => {
      return await joinGameMutation(args, context);
    },
    leaveGame: async (_, args, context) => {
      return await leaveGameMutation(args, context);
    },
    launchGame: async (_, args, context) => {
      return await launchGameMutation(args, context);
    },
  },
};

export default gamesResolvers;
