const registerMutation = async args => {
	const {
		registerInput: { username, email, password, confirmPassword }
	} = args;

	return { };
};

export default registerMutation;
