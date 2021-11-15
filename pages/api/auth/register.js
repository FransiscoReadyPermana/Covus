import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/user';

dbConnect();

const user = async (req, res) => {
  const { method } = req;
  const userService = new UserService();
  switch (method) {
    case 'POST':
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
        userValidation.validateRegisterUserPayload(req.body);

        // check name alphanumeric
        if (!isAlphanumericWithSpace(nama)) {
          throw new InvariantError(NAME_ALPHANUMERIC_ERR_MSG, VALIDATION_ERR);
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
          confirmPassword,
        });

        return res.status(200).json({
          success: true,
          message: 'Activation link success sent to mail. Please check',
        });
      } catch (error) {
        if (error instanceof ClientError) {
          return res.status(error.statusCode).json(clientErrRes(error));
        }

        return res.status(500).json(serverErrRes(error));
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = user;
