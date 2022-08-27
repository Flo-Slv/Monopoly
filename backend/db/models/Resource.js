import mongoose from 'mongoose';

const { Schema } = mongoose;

const resourceSchema = new Schema({
  startingMoney: {
    type: Number,
    required: Boolean(true)
  },
  luckyCards: {
    type: [String],
    required: Boolean(true)
  },
  communityChestCards: {
    type: [String],
    required: Boolean(true)
  },
  nbHostels: {
    type: Number,
    required: Boolean(true)
  },
  nbHouses: {
    type: Number,
    required: Boolean(true)
  },
  squares: [{
    id: String,
    label: String,
    type: String,
    group: String
  }],
  jailCost: {
    type: Number // 200
  }
});

export default mongoose.models.Resource || mongoose.model('Resource', resourceSchema);
