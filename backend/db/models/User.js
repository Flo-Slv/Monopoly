import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const userSchema = new Schema({
	email: String,
	username: String,
	createdAt: String,
	urlAvatar: String
});

const User = model('User', userSchema);

export default User;
