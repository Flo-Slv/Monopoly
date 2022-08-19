import Game from '../../../db/models/Game.js';

const getGameQuery = async (args) => {
  const { id } = args;

  try {
    return await Game.findOne({ id: id });
  } catch (err) {
    throw new Error(err);
  }
};

export default getGameQuery;
