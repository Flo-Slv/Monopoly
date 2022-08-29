import mongoose from 'mongoose';

const { Schema } = mongoose;

const gameSchema = new Schema({
  // start with
  createdAt: {
    type: String,
    required: Boolean(true),
  },
  attendees: [
    {
      id: String,
      username: String,
      urlAvatar: String,
      money: Number,
      color: String,
    },
  ],
  chatbox: [
    {
      player: {
        id: String,
        username: String,
        urlAvatar: String,
        color: String,
      },
      text: String,
      time: String,
    },
  ],
  // generate after launch game
  squares: [
    {
      label: { type: String },
      type: { type: String },
      group: { type: String },
      attendees: [{ id: String, username: String, urlAvatar: String, color: String }],
      prisoners: [{ id: String, username: String, urlAvatar: String, color: String }],
      owner: { id: String, username: String, urlAvatar: String, color: String },
      nbHouses: { type: Number },
      nbHostels: { type: Number },
      mortgaged: { type: Boolean },
      monopoly: { type: Boolean },
    },
  ],
  startTime: String,
  endTime: String,
});

export default mongoose.models.Game || mongoose.model('Game', gameSchema);

// TO DO
// card sent to jail. other special cards ???
// jail delay
