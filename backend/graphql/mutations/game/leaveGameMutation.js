import { getToken } from 'next-auth/jwt';
import { UserInputError } from 'apollo-server-micro';

import Game from '../../../db/models/Game.js';
import User from '../../../db/models/User.js';

const leaveGameMutation = async (args, context) => {
	const req = context.req;
	const { _id } = args;

	try {
		const secret = process.env.NEXTAUTH_SECRET;
		const token = await getToken({ req, secret });

		if (token?.idUser) {
			const user = await User.findOne({ _id: token.idUser });
			const game = await Game.findOne({ _id: _id });

			if (!user) {
				throw new UserInputError('user not found in DB', {
					'errors': { 'general': 'User not found !' }
				});
			}

			if (!game) {
				throw new UserInputError('game not found in DB', {
					'errors': { 'general': 'Game not found !' }
				});
			}

			if (user.hasCurrentGame) {
				// player already in another game
				const lastGame = await Game.findOne({ _id: user.currentGame });
				if (lastGame != undefined) {
					lastGame.attendees = lastGame.attendees.filter((u) => u._id.toString() !== user.id);
					if (lastGame.attendees.length < 1) {
						// no player then delete game
						await Game.deleteOne({ _id: lastGame.id });
					} else {
						await lastGame.save();
					}
				}

				user.hasCurrentGame = Boolean(false);
				user.currentGame = undefined;
				await user.save();
			}

			return game;
		} else {
			throw new Error('logged out user');
		}
	} catch (err) {
		throw new Error(err);
	}
};

export default leaveGameMutation;
