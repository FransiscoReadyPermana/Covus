import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/user';
import NotFoundError from '../../../expecptions/NotFoundError';
import bcrypt from 'bcrypt';
import AuthenticationError from '../../../expecptions/Authentication';

export default connectDb(
  NextAuth({
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.SECRET_KEY,
    },
    providers: [
      Providers.Credentials({
        async authorize(credentials) {
          const user = await User.findOne({ email: credentials.email });

          if (!user) {
            throw new NotFoundError('User not found');
          }

          const isMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isMatch) {
            throw new AuthenticationError('Email or Password incorrect');
          }

          return { name: user.fullname, email: user.email };
        },
      }),
      Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    database: process.env.MONGO_URI,
    callbacks: {
      async signIn(user, account, profile) {
        if (account.provider === 'google') {
          if (profile.verified_email === true) {
            return true;
          }

          return false;
        }

        return true;
      },
    },
  }),
  true
);
