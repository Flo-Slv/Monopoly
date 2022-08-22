import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';

import { LAUNCH_GAME } from '../../helpers/graphql/mutations/games/launchGame.js';

export default function LaunchGameButton({ game }) {
  const [launchGame, { data, loading, error }] = useMutation(LAUNCH_GAME);

  if (loading) return 'Submitting...';
  if (error) return `Submission error: ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    launchGame({ variables: { _id: game._id } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit">Lancer la partie</Button>
    </form>
  );
}
