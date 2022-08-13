import User from '../../../db/models/User.js';
import { getToken } from 'next-auth/jwt';

const getMeQuery = async (context) => {
  const req = context.req;

  try {
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken({ req, secret });

    if (token?.idUser) {
      return await User.findOne({ id: token.idUser });
    } else {
      throw new Error('logged out user');
    }
  } catch (err) {
    throw new Error(err);
  }
};

export default getMeQuery;
