import { useQuery } from '@apollo/client';
import { GET_GAME } from '../../helpers/graphql/queries/games/getGame';

export default function Game({ id }) {
  const { loading, error, data } = useQuery(GET_GAME, {
    variables: { _id: id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <>
      <h2>Page game id {data.getGame._id}</h2>
    </>
  );
}
