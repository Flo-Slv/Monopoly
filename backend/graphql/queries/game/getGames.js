import Game from '../../../db/models/Game.js';

const getGamesQuery = async () => {
  try {
    // Find all users and return by sorting createdAt.
    return await Game.find().sort({ createdAt: 'desc' });
  } catch (err) {
    throw new Error(err);
  }
};

export default getGamesQuery;
