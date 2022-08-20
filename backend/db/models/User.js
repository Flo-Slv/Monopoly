import mongoose from 'mongoose';
// import Game from './Game.js';

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
  //currentGame: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
  currentGame: { type: String, required: Boolean(true) },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
