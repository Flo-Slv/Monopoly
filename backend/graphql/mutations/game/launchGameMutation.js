import { getToken } from 'next-auth/jwt';
import { UserInputError } from 'apollo-server-micro';
import { SQUARES, COLORS } from '../../../utils/config';
import { shuffle } from '../../../utils/functions';

import Game from '../../../db/models/Game';
import User from '../../../db/models/User';

const initGame = async (game) => {
  game.startTime = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  // create board game
  game.squares = SQUARES;
  // player order
  game.attendees = shuffle(game.attendees);
  // player color
  const colors = shuffle(COLORS);
  game.attendees = game.attendees.map((attendee, index) => {
    attendee.color = colors[index];
    return attendee;
  });
  // initial position player on board game
  game.squares[0].attendees = game.attendees;

  // next line used just for testing
  game = addDataTest(game);

  await game.save();

  return game;
};

const addDataTest = (game) => {
  game.squares[1].owner = game.attendees[0];
  game.squares[3].owner = game.attendees[0];
  game.squares[3].owner = game.attendees[0];
  game.squares[11].owner = game.attendees[0];
  return game;
};

const launchGameMutation = async (args, context) => {
  const req = context.req;
  const { _id } = args;

  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (token?.idUser) {
      const user = await User.findOne({ _id: token.idUser });
      const game = await Game.findOne({ _id: _id });

      if (!user) {
        throw new UserInputError('user not found in DB', {
          errors: { general: `L'utilisateur n'existe pas !` },
        });
      }

      if (!game) {
        throw new UserInputError('game not found in DB', {
          errors: { general: `La partie n'existe pas !` },
        });
      }

      const found = game.attendees.find((u) => u._id.toString() === token.idUser);
      if (found !== undefined) {
        return await initGame(game);
      } else {
        throw new UserInputError('join this game before launch', {
          errors: { general: `Vous devez d'abord rejoindre cette partie !` },
        });
      }
    } else {
      throw new Error('logged out user');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default launchGameMutation;
