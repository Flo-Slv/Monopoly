import mongoose from 'mongoose';

const { Schema } = mongoose;

const resourceSchema = new Schema({
});

export default mongoose.modes.Resource || mongoose.model('Resource', resourceSchema);
