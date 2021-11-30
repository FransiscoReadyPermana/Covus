import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/user';
import { getSession } from 'next-auth/client';

dbConnect();

const user = async (req, res) => {
  const { method } = req;
  const session = await getSession();
  const email = session.user.email;

  switch (method) {
    case 'GET':
      try {
        const userr = await User.findOne({ email });
        res.status(200).json({ success: true, data: userr });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};

module.exports = user;
