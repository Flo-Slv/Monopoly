import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';

import { JOIN_GAME } from '../../helpers/graphql/mutations/games/joinGame.js';

const JoinGameButton = ({ game }) => {
  const [joinGame, { data, loading, error }] = useMutation(JOIN_GAME);

  if (loading) return 'Submitting...';
  if (error) return `Submission error: ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    joinGame({ variables: { _id: game._id } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit">Rejoindre la partie</Button>
    </form>
  );
};

export default JoinGameButton;
