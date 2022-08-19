import Game from '../../../db/models/Game.js';
import User from '../../../db/models/User.js';
import { getToken } from 'next-auth/jwt';

const addGameMutation = async (context) => {
  const req = context.req;

  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (token?.idUser) {
      const user = await User.findOne({ _id: token.idUser });

      // player already in another game
      if (user.currentGame !== '-1') {
        const lastGame = await Game.findOne({ _id: user.currentGame });
        if (lastGame != undefined) {
          lastGame.attendees = lastGame.attendees.filter((user) => user.id !== token.idUser);
          await lastGame.save();
        }
      }

      const newGame = new Game({
        createdAt: new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
        attendees: [user],
        chatbox: [],
      });
      await newGame.save();

      user.currentGame = game;
      await user.save();

      return newGame;
    } else {
      throw new Error('logged out user');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default addGameMutation;
