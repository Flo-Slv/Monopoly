import { useQuery } from '@apollo/client';
import { GET_GAMES } from '../../helpers/graphql/game';
import GameListElement from './gameListElement';

export default function GameList() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.getGames.map((game) => (
        <GameListElement key={game.id} game={game} />
      ))}
    </>
  );
}
