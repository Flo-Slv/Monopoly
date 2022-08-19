import { useQuery } from '@apollo/client';
import { GET_GAMES } from '../../helpers/graphql/game';

export default function Games() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      Liste des parties
      {data.getGames.map((game) => (
        <div key={game.id}>{game.createdAt}</div>
      ))}
    </div>
  );
}
