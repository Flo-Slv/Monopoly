import User from '../../../db/models/User.js';

const loginMutation = async args => {
	const { loginInput: { email } } = args;

	return { };
};

export default loginMutation;
