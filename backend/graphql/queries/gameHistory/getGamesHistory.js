import GameHistory from '../../../db/models/GameHistory.js';

const getGamesHistory = async () => {
	try {
		// Find all games history by sorting startTime.
		const gamesHistory = await GameHistory.find().sort({ 'startTime': 'asc' });
		console.log('gamesHistory', gamesHistory);
		return gamesHistory;
	}
	catch(err) {
		throw new Error(err);
	}
};

export default getGamesHistory;
