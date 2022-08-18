import User from '../../../db/models/User.js';

import getUserQuery from '../../queries/user/getUserQuery';

const loginMutation = async args => {
	const { loginInput: { email, username, urlAvatar } } = args;

	const existingUser = await getUserQuery({ email });

	if (existingUser) {
		return { user: existingUser, isNew: Boolean(false) };
	} else {
		const newUser = new User({
			email: email,
			username: username,
			createdAt: new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }),
			urlAvatar: urlAvatar
		});

		try {
			await newUser.save();
			return { user: newUser, isNew: Boolean(true) };
		}
		catch(err) {
			throw new Error(err);
		}
	}

};

export default loginMutation;
