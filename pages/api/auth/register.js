import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/user";
import userService from "../../../service/userService";
import InvariantError from "../../../expecptions/InvariantError";
import userValidation from "../../../validations/user";

dbConnect();

const user = async (req, res) => {
  const isAlphanumericWithSpace = (str) => /^[a-zA-Z0-9\s]+$/gm.test(str);
  const isUsername = (str) => /^[a-z0-9_.]+$/gm.test(str);
  const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm.test(str);
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        // get user data from request
        const {
          nama,
          email,
          tanggal,
          bulan,
          tahun,
          alamat,
          password,
          confirmPassword,
        } = req.body;

        // validate user data
        userValidation.validateUserPayload(req.body);


        //check if name is alphabet
        if (/[^A-Za-z ]/g.test(nama)) {
          throw new InvariantError(
            '"fullname" Full name must be alphabet',
            VALIDATION_ERR
            );
          }
          
        // create user
        await userService.createUser({
          nama,
          email,
          tanggal,
          bulan,
          tahun,
          alamat,
          password,
        });

        return res.status(200).json({
          success: true,
          message: "Activation link success sent to mail. Please check",
        });
      } catch (error) {
        res.status(400).json({ success: false, msg: "user sudah ada" });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = user;
