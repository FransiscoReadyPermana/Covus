import dbConnect from '../../../utils/dbConnect';
import ReservasiVaksin from '../../../models/reservasi';
import VaksinService from '../../../service/Vaksin';
import User from '../../../models/user';
import ClientError from '../../../expecptions/ClientError';

dbConnect();

const ReservasiVaksinDelete = async (req, res) => {
  const { method } = req;
  const vaksinService = new VaksinService();

  switch (method) {
    case 'DELETE':
      try {
        const { id } = req.query;

        await vaksinService.deleteReservasi(id);

        return res.status(200).json({
          success: true,
          message: 'Success delete Reservation',
        });
      } catch (error) {
        if (error instanceof ClientError) {
          return res.status(error.codeStatus).json({
            success: false,
            message: error.message,
          });
        }

        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = ReservasiVaksinDelete;
