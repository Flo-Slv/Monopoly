import Game from '../../../db/models/Game.js';

const getGameQuery = async (args) => {
  const { _id } = args;

  try {
    return await Game.findOne({ _id: _id });
  } catch (err) {
    throw new Error(err);
  }
};

export default getGameQuery;
