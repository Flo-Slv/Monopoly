import Resource from '../../../db/models/Resource.js';

const getResourcesQuery = async () => {
  try {
    return await Resource.findOne();
  } catch (err) {
    throw new Error(err);
  }
};

export default getResourcesQuery;
