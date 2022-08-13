import mongoose from 'mongoose';

const { Schema } = mongoose;

const historySchema = new Schema({
  attendees: [
    { id: String, username: String, urlAvatar: String }
  ],
  winner: {
    id: String,
    username: String,
    urlAvatar: String,
    name: String
  },
  startTime: String,
  endTime: String
});

export default mongoose.models.History || mongoose.model('History', historySchema); 
