import { useQuery } from '@apollo/client';
import { GET_GAMES, JOIN_GAME } from '../../helpers/graphql/game';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';

export default function Games() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      Liste des parties
      {data.getGames.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}

function Game({ game }) {
  // show join launch or leave
  const [joinGame, { data, loading, error }] = useMutation(JOIN_GAME);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    joinGame({ variables: { id: game.id } });
  };
  return (
    <div>
      {game.id}--{game.createdAt}
      <form onSubmit={handleSubmit}>
        <Button type="submit">Rejoindre la partie</Button>
      </form>
    </div>
  );
}
