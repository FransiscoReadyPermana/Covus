import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/user";
import { getSession } from "next-auth/client";
import UserService from "../../../service/User";

dbConnect();

const Akun = async (req, res) => {
  const { method } = req;
  // const alamatEmail = session?.user.email;

  switch (method) {
    case "GET":
      try {
        const { email } = req.query;
        const userr = await User.findOne({ email });
        res.status(200).json({ success: true, data: userr });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const { nama, tanggal, bulan, tahun, alamat, kataSandi } = req.body;
        const { email } = req.query;
        const userService = new UserService();

        await userService.editUser(email, {
          nama,
          tanggal,
          bulan,
          tahun,
          alamat,
          kataSandi,
        });
        
        return res.status(200).json({
          success: true,
          message: "Berhasil Memperbaharui Data",
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = Akun;
