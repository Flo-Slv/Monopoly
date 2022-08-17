import mongoose from 'mongoose';

const { Schema } = mongoose;

const gameSchema = new Schema({

});

export default mongoose.models.Game || mongoose.model('Game', gameSchema);
