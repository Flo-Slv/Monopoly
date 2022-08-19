import User from '../../../db/models/User.js';

const getUserQuery = async (args) => {
  const { email } = args;

  try {
    return await User.findOne({ email: email });
  } catch (err) {
    throw new Error(err);
  }
};

export default getUserQuery;
