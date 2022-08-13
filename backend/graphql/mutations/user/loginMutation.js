import User from '../../../db/models/User.js';
import getUserQuery from '../../queries/user/getUserQuery';

const loginMutation = async args => {
  const { loginInput: { email,username,urlAvatar } } = args;

  const existingUser = await getUserQuery({email});

  if(existingUser) {
    return {user:existingUser,isNew:false};
  } else {
    const newUser = new User({
      email: email,
      username: username,
      createdAt: new Date(),
      urlAvatar: urlAvatar
    });
    try {
      await newUser.save();
      return {user:newUser,isNew:true};
    }
    catch(err) {
      throw new Error(err);
    }
  }

};

export default loginMutation;
