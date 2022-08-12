import User from '../../../db/models/User.js';

const registerMutation = async args => {
	const {
		registerInput: { username, email }
	} = args;

	return { };
};

export default registerMutation;
