import dbConnect from '../../../utils/dbConnect';
import ReservasiVaksinasi from '../../../models/reservasiVaksinasi';

dbConnect();

const reservasiVaksin = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const reservasiVaksin = await ReservasiVaksinasi.find({});
        res.status(200).json({ success: true, data: reservasiVaksin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const reservasiVaksin = await ReservasiVaksinasi.create(req.body);
        res.status(201).json({ success: true, data: reservasiVaksin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = reservasiVaksin;
