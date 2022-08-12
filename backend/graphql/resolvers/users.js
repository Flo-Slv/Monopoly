import getUsersQuery from '../queries/user/getUsersQuery.js';
import getUserQuery from '../queries/user/getUserQuery.js';

import registerMutation from '../mutations/user/registerMutation.js';
import loginMutation from '../mutations/user/loginMutation.js';

const usersResolvers = {
  Query: {
    getUsers: async () => {
      return await getUsersQuery();
    },
    getUser: async (_, args) => {
      return await getUserQuery(args);
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
