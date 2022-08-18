import usersResolvers from './users.js';
import gamesHistoryResolvers from './gamesHistory.js';
import resourcesResolvers from './resources.js';

const resolvers = {
	Query: {
		...usersResolvers.Query,
		...gamesHistoryResolvers.Query,
		...resourcesResolvers.Query
	},
	Mutation: {
		...usersResolvers.Mutation
	}
};

export default resolvers;
