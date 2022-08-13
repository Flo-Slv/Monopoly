import { withAuth } from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (
        token?.idUser ||
        req.nextUrl.pathname === '/auth/signin' ||
        req.nextUrl.pathname.startsWith('/api/auth/')
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
});
