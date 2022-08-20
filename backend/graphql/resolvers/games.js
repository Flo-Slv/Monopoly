import getGames from '../queries/game/getGames.js';
import getGame from '../queries/game/getGame.js';

import addGameMutation from '../mutations/game/addGameMutation.js';
import joinGameMutation from '../mutations/game/joinGameMutation.js';
import leaveGameMutation from '../mutations/game/leaveGameMutation.js';
import launchGameMutation from '../mutations/game/launchGameMutation.js';

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
    joinGame: async (_, args, context) => {
      return await joinGameMutation(args, context);
    },
    leaveGame: async (_, args, context) => {
      return await leaveGameMutation(args, context);
    },
    launchGame: async (_, args, context) => {
      return await addGameMutation(args, context);
    },
  },
};

export default gamesResolvers;
