import { useQuery } from '@apollo/client';

import User from './userListElement';
import { GET_USERS } from '../../helpers/graphql/queries/users/getUsers.js';

export default function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.getUsers.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </>
  );
}
