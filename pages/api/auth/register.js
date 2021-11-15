import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/user";
import userService from "../../../service/userService";
import InvariantError from "../../../expecptions/InvariantError";
import userValidation from "../../../validations/user";

dbConnect();

const user = async (req, res) => {
  const { method } = req;
  const userService = new UserService();
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
<<<<<<< HEAD
        if (error instanceof ClientError) {
          return res.status(error.statusCode).json(clientErrRes(error));
        }

        return res.status(500).json(serverErrRes(error));
=======
        res.status(400).json({ success: false, msg: "user sudah ada" });
>>>>>>> 7a6fd94f7a1202a560dc3061b51f49098601a8cc
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = user;
