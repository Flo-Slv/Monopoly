import { useQuery } from '@apollo/client';

import GameListElement from './gameListElement';
import { GET_GAMES } from '../../helpers/graphql/queries/games/getGames.js';

const GameList = () => {
	const { loading, error, data } = useQuery(GET_GAMES);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<>
			{data.getGames.map((game) => (
				<GameListElement key={game._id} game={game} />
			))}
			</>
	);
};

export default GameList;
