import Game from '../../../db/models/Game.js';
import User from '../../../db/models/User.js';
import { getToken } from 'next-auth/jwt';

const joinGameMutation = async (args, context) => {
  const req = context.req;
  const { id } = args;

  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (token?.idUser) {
      const user = await User.findOne({ _id: token.idUser });
      const game = await Game.findOne({ _id: id });

      if (user.currentGame !== '-1') {
        // player already in another game
        const lastGame = await Game.findOne({ _id: user.currentGame });
        lastGame.attendees = lastGame.attendees.filter((user) => user.id !== token.idUser);
        if (lastGame.attendees.length < 1) {
          // no player then delete game
          Game.deleteOne({ _id: lastGame.id });
        } else {
          await lastGame.save();
        }
      }

      game.attendees.push(user);
      await game.save();

      user.currentGame = game.id;
      await user.save();

      return game;
    } else {
      throw new Error('logged out user');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default joinGameMutation;
