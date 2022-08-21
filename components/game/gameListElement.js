import { useUser } from '../../helpers/contexts/user';

import User from '../user/user';

import LeaveGameButton from './leaveGameButton';
import JoinGameButton from './joinGameButton';

const GameListElement = ({ game }) => {
	const { currentGame } = useUser();

	return (
		<div>
			<hr />
			Partie créée le : {game.createdAt}
			{game.attendees.map((user, index) => (
				<User key={index} user={user} />
			))}

			{currentGame && currentGame === game._id ? (
				<LeaveGameButton game={game} />
			) : (
				<JoinGameButton game={game} />
			)}
		</div>
	);
};

export default GameListElement;
