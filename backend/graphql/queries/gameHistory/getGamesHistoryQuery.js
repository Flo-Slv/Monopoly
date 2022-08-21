import GameHistory from '../../../db/models/GameHistory.js';

const getGamesHistoryQuery = async () => {
	try {
		// Find all games history by sorting startTime.
		return await GameHistory.find().sort({ 'startTime': 'asc' });
	}
	catch(err) {
		throw new Error(err);
	}
};

export default getGamesHistoryQuery;
