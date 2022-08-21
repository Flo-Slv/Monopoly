import { useQuery } from '@apollo/client';
import { GET_USER } from '../../helpers/graphql/queries/users/getUser';
import Avatar from '@mui/material/Avatar';

export default function User({ id }) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { _id: id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <>
      <h2> Profil du joueur {data.getUser.username}</h2>
      <Avatar alt={data.getUser.username} src={data.getUser.urlAvatar} />
    </>
  );
}
