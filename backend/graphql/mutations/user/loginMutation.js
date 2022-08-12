import User from '../../../db/models/User.js';
import getUserQuery from '../../queries/user/getUserQuery';

const loginMutation = async args => {
  const { loginInput: { email } } = args;

  const existingUser = await getUserQuery({email});

  if(existingUser) {
    return existingUser;
  } else {
    const newUser = new User({
      email: email,
      username: "chaussette",
      createdAt: new Date()
    });
    try {
      await newUser.save();
      return newUser;
    }
    catch(err) {
      throw new Error(err);
    }
  }

};

export default loginMutation;
