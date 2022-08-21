import { JOIN_GAME } from '../../helpers/graphql/game';
import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';

export default function JoinGameButton({ game }) {
  const [joinGame, { data, loading, error }] = useMutation(JOIN_GAME);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    joinGame({ variables: { id: game.id } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit">Rejoindre la partie</Button>
    </form>
  );
}
