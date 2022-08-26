import { getToken } from 'next-auth/jwt';
import { UserInputError } from 'apollo-server-micro';

import Game from '../../../db/models/Game.js';
import User from '../../../db/models/User.js';

const SQUARES = [
  {
    label: 'Prison',
    type: 'jail',
    players: [],
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Ruehd djkdhk de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Parc gratuit',
    type: 'parking',
    players: [],
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Départ',
    type: 'start',
    players: [],
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Rue de la Paix',
    type: 'property',
    group: 'yellow',
    players: [],
    owner: null,
    nbHouses: 0,
    nbHostels: 0,
    mortgaged: false,
    monopoly: false,
  },
  {
    label: 'Aller en prison',
    type: 'goJail',
    players: [],
  },
];

const initGame = async (game) => {
  game.startTime = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  game.squares = SQUARES;
  game.squares[1].owner = game.attendees[0];
  game.squares[1].players.push(game.attendees[0]);

  await game.save();

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
          errors: { general: 'User not found !' },
        });
      }

      if (!game) {
        throw new UserInputError('game not found in DB', {
          errors: { general: 'Game not found !' },
        });
      }

      const found = game.attendees.find((u) => u._id.toString() === token.idUser);
      if (found !== undefined) {
        return await initGame(game);
      } else {
        throw new Error('join this game before launch');
      }
    } else {
      throw new Error('logged out user');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default launchGameMutation;
