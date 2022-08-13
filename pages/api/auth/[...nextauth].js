import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import getUserQuery from '../../../backend/graphql/queries/user/getUserQuery';
import loginMutation from '../../../backend/graphql/mutations/user/loginMutation';
import connectDb from '../../../backend/db/config/connectDb.js';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: '/auth/signin',
    // signOut: "/auth/signout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        // connection
        await connectDb();
        const result = await loginMutation({
          loginInput: { email: user.email, username: user.name, urlAvatar: user.image },
        });
        token.idUser = result.user._id;
      } else {
        // checking session
      }

      return token;
    },
  },
});
