import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const userSchema = new Schema({
	email: {
		type: String,
		required: Boolean(true)
	},
	username: {
		type: String,
		required: Boolean(true)
	},
	createdAt: {
		type: String,
		required: Boolean(true)
	},
	urlAvatar: String
});

const User = model('User', userSchema);

export default User;
