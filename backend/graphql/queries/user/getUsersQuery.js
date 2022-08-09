import User from '../../../db/models/User.js';

const getUsersQuery = async () => {
	try {
		// Find all users and return by sorting createdAt.
		return await User.find().sort({ 'createdAt': 'asc' });
	}
	catch(err) {
		throw new Error(err);
	}
};

export default getUsersQuery;
