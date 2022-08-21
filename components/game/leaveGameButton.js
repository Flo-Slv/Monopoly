import { useMutation } from '@apollo/client';
import Button from '@mui/material/Button';

import { LEAVE_GAME } from '../../helpers/graphql/mutations/games/leaveGame.js';

const LeaveGameButton = ({ game }) => {
	const [leaveGame, { data, loading, error }] = useMutation(LEAVE_GAME);

	if (loading) return 'Submitting...';
	if (error) return `Submission error! ${error.message}`;

	const handleSubmit = (e) => {
		e.preventDefault();
		leaveGame({ variables: { _id: game._id } });
	};

	return (
		<form onSubmit={handleSubmit}>
			<Button type="submit">Quitter la partie</Button>
		</form>
	);
};

export default LeaveGameButton;
