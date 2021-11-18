import dbConnect from '../../../utils/dbConnect';
import UserService from '../../../service/UserService';
import InvariantError from '../../../expecptions/InvariantError';
import userValidation from '../../../validations/user';
import ClientError from '../../../expecptions/ClientError';
import {
  clientErrRes,
  notAllowedErrRes,
  serverErrRes,
} from '../../../lib/errorResponse';

dbConnect();

const user = async (req, res) => {
  const { method } = req;
  const userService = new UserService();
  switch (method) {
    case 'POST':
      try {
        // get user data from request
        const { nama, email, tanggal, bulan, tahun, jenisKelamin, alamat, kataSandi } =
          req.body;

        // validate user data
        userValidation.validateUserPayload(req.body);

        //check if name is alphabet
        if (/[^A-Za-z ]/g.test(nama)) {
          throw new InvariantError(
            'Full name must be alphabet',
            VALIDATION_ERR
          );
        }

        // check if email is exists
        await userService.emailExists(email);

        // create user
        const userId = await userService.createUser({
          nama,
          email,
          tanggal,
          bulan,
          tahun,
          jenisKelamin,
          alamat,
          kataSandi,
        });

        return res.status(201).json({
          success: true,
          message: 'User successfull created',
          user: {
            id: userId,
          },
        });
      } catch (error) {
        if (error instanceof ClientError) {
          return res.status(error.statusCode).json(clientErrRes(error));
        }

        return res.status(500).json(serverErrRes(error));
      }

    default:
      return res.status(400).json(notAllowedErrRes());
  }
};

module.exports = user;
