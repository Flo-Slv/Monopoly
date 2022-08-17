import getResourcesQuery from '../queries/resource/getResources.js';

const resourcesResolvers = {
	Query: {
		getResources: async () => {
			return await getResourcesQuery();
		}
	}
};

export default resourcesResolvers;
