import getUsersQuery from '../queries/user/getUsersQuery.js';
import getUserQuery from '../queries/user/getUserQuery.js';
import getMeQuery from '../queries/user/getMeQuery.js';

import registerMutation from '../mutations/user/registerMutation.js';
import loginMutation from '../mutations/user/loginMutation.js';

const usersResolvers = {
  Query: {
    getUsers: async () => {
      return await getUsersQuery();
    },
    getUser: async (_, args) => {
      return await getUserQuery(args);
    },
    getMe: async (_, args, context) => {
      return await getMeQuery(context);
    }
  },
  Mutation: {
    register: async (_, args) => {
      return await registerMutation(args);
    },
    login: async (_, args) => {
      return await loginMutation(args);
    }
  }
};

export default usersResolvers;
