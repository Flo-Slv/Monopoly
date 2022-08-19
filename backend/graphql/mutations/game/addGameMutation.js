import Game from '../../../db/models/Game.js';
import User from '../../../db/models/User.js';
import { getToken } from 'next-auth/jwt';

const addGameMutation = async (context) => {
  const req = context.req;

  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (token?.idUser) {
      const user = await User.findOne({ id: token.idUser });
      const newGame = new Game({
        createdAt: new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
        attendees: [user],
        chatbox: [],
      });
      await newGame.save();
      return newGame;
    } else {
      throw new Error('logged out user');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default addGameMutation;
