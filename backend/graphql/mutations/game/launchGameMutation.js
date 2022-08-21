import { getToken } from 'next-auth/jwt';
import { UserInputError } from 'apollo-server-micro';

import Game from '../../../db/models/Game.js';
import User from '../../../db/models/User.js';

const launchGameMutation = async (args, context) => {
  const req = context.req;
  const { idGame } = args;

  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (token?.idUser) {
      const user = await User.findOne({ _id: token.idUser });
      const game = await Game.findOne({ _id: idGame });

      if (!user) {
        throw new UserInputError('user not found in DB', {
          errors: { general: 'User not found !' },
        });
      }

      if (!game) {
        throw new UserInputError('game not found in DB', {
          errors: { general: 'Game not found !' },
        });
      }

      const found = game.attendees.find((user) => user.id === token.idUser);
      if (found !== undefined) {
        game.startTime = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
        await game.save();
        return game;
      } else {
        throw new Error('you need join this game before launch');
      }
    } else {
      throw new Error('logged out user');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default launchGameMutation;