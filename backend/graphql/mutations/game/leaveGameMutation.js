import Game from '../../../db/models/Game.js';
import User from '../../../db/models/User.js';
import { getToken } from 'next-auth/jwt';

const leaveGameMutation = async (args, context) => {
  const req = context.req;
  const { idGame } = args;

  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (token?.idUser) {
      const user = await User.findOne({ _id: token.idUser });
      const game = await Game.findOne({ _id: idGame });
      game.attendees = game.attendees.filter((user) => user.id !== token.idUser);
      await game.save();
      return game;
    } else {
      throw new Error('logged out user');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default leaveGameMutation;
