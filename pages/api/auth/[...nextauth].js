import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/user';
import NotFoundError from '../../../expecptions/NotFoundError';
import bcrypt from 'bcrypt';
import AuthenticationError from '../../../expecptions/Authentication';

dbConnect();

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.SECRET_KEY,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new NotFoundError("User not found");
        }

        const isMatch = await bcrypt.compare(
          credentials.kataSandi,
          user.kataSandi
        );

        if (!isMatch) {
          throw new AuthenticationError("Email or Password incorrect");
        }

        console.log("sabi bos");

        return { name: user.nama, email: user.email };
      },
    }),
  ],
  database: process.env.MONGO_URI,
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    session: async (session, user) => {
      if (user) {
        session.id = user.id;
      }
      return session;
    },
  },
});

// module.exports = NextAuth;
