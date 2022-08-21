import getResourcesQuery from '../queries/resource/getResourcesQuery.js';

const resourcesResolvers = {
  Query: {
    getResources: async () => {
      return await getResourcesQuery();
    },
  },
};

export default resourcesResolvers;
