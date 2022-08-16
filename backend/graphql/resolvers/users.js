import getUsersQuery from '../queries/user/getUsersQuery.js';
import getUserQuery from '../queries/user/getUserQuery.js';
import getMeQuery from '../queries/user/getMeQuery.js';

import loginMutation from '../mutations/user/loginMutation.js';

const usersResolvers = {
	Query: {
		getUsers: async () => {
			return await getUsersQuery();
		},
		getUser: async (_, args) => {
			return await getUserQuery(args);
		},
		getMe: async (_, __, context) => {
			return await getMeQuery(context);
		}
	},
	Mutation: {
		login: async (_, args) => {
			return await loginMutation(args);
		}
	}
};

export default usersResolvers;
