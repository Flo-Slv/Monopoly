import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../helpers/graphql/user';

export default function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      Liste des joueurs
      {data.getUsers.map((user) => (
        <div key={user.email}>{user.username}</div>
      ))}
    </div>
  );
}
