import { useQuery } from '@apollo/client';
import { GET_ME } from '../../helpers/graphql/user';

export default function Hello() {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      Hello
      {data.getMe.username}
    </div>
  );
}
