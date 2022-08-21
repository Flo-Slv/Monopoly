import mongoose from 'mongoose';

const { Schema } = mongoose;

const historySchema = new Schema({
	attendees: [{
		id: String,
		email: String,
		username: String,
		urlAvatar: String
	}],
	winner: {
		id: String,
		email: String,
		username: String,
		urlAvatar: String
	},
	startTime: String,
	endTime: String
});

export default mongoose.models.History || mongoose.model('History', historySchema);
