import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';

import { ADD_GAME } from '../../helpers/graphql/mutations/games/addGame.js';

const AddGameButton = () => {
  const [addGame, { data, loading, error }] = useMutation(ADD_GAME);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" variant="contained">
        Créer une nouvelle partie
      </Button>
    </form>
  );
};

export default AddGameButton;
