import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/user';
import { getSession } from 'next-auth/client';
import UserService from '../../../service/User';

dbConnect();

const Akun = async (req, res) => {
  const { method } = req;
  // const alamatEmail = session?.user.email;

  switch (method) {
    case 'PUT':
      try {
        const { kataSandi, kataSandiBaru } = req.body;
        const { nama } = req.query;
        const userService = new UserService();

        await userService.editPassword(nama, {
          kataSandi,
          kataSandiBaru,
        });
        return res.status(200).json({
          success: true,
          message: 'Berhasil Memperbaharui Kata Sandi',
        });
      } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = Akun;
