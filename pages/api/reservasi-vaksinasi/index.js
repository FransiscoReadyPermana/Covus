import dbConnect from "../../../utils/dbConnect";
import ReservasiVaksinasi from "../../../models/reservasi";
import VaksinService from "../../../service/Vaksin";
import User from "../../../models/user";
dbConnect();

const ReservasiVaksin = async (req, res) => {
  const { method } = req;
  const vaksinService = new VaksinService();

  switch (method) {
    case "GET":
      try {
        const reservasiVaksin = await ReservasiVaksinasi.find({}).populate(
          "userId"
        );
        // const reservasiVaksin = await ReservasiVaksinasi.find({});
        res.status(200).json({ success: true, data: reservasiVaksin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        // get user data from request
        const {
          userId,
          provinsi,
          nama,
          namaVaksin,
          tanggal,
          waktu,
          lokasi1,
          lokasi2,
          jenisVaksin,
          kontradiksi,
        } = req.body;

        // create user
        const vaksinID = await vaksinService.createVaksin({
          userId,
          provinsi,
          nama,
          namaVaksin,
          tanggal,
          waktu,
          lokasi1,
          lokasi2,
          jenisVaksin,
          kontradiksi,
        });

        return res.status(201).json({
          success: true,
          message: "berhasil",
        });
      } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
      }

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = ReservasiVaksin;
