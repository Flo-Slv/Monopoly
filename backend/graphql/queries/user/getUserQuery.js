import User from '../../../db/models/User.js';

const getUserQuery = async (args) => {
  const { email, _id } = args;

  try {
    if (email) {
      return await User.findOne({ email: email });
    }
    if (_id) {
      return await User.findOne({ _id: _id });
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default getUserQuery;
