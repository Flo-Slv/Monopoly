import { useMutation } from '@apollo/client';
import { ADD_GAME } from '../../helpers/graphql/game';
import { useEffect } from 'react';
import Button from '@mui/material/Button';

export default function AddGame() {
  const [addTodo, { data, loading, error }] = useMutation(ADD_GAME);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('add game');
    addTodo();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit" variant="contained">
        Créer une nouvelle partie
      </Button>
    </form>
  );
}
