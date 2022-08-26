import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: Boolean(true),
  },
  username: {
    type: String,
    required: Boolean(true),
  },
  createdAt: {
    type: String,
    required: Boolean(true),
  },
  urlAvatar: String,
  hasCurrentGame: { type: Boolean, required: Boolean(true) },
  currentGame: { type: String },
  // currentGame: { type: Schema.Types.ObjectId, ref: 'games' }
});

export default mongoose.models.User || mongoose.model('User', userSchema);
