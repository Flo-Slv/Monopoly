import mongoose from 'mongoose';

const { Schema } = mongoose;

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

export default mongoose.models.User || mongoose.model('User', userSchema);
