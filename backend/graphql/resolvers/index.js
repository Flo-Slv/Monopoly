import usersResolvers from './users.js';

const resolvers = {
	Query: {
		...usersResolvers.Query
	},
	Mutation: {
		...usersResolvers.Mutation
	}
}

export default resolvers;
