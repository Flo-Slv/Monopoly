import Game from '../../../db/models/Game.js';

const getGamesQuery = async () => {
  try {
    // Find all users and return by sorting createdAt.
    const games = await Game.find().sort({ createdAt: 'desc' });
    return games;
  } catch (err) {
    throw new Error(err);
  }
};

export default getGamesQuery;
