import dbConnect from "../../../utils/dbConnect";
import ReservasiVaksinasi from "../../../models/reservasi";
import VaksinService from "../../../service/Vaksin";

dbConnect();

const ReservasiVaksin = async (req, res) => {
  const { method } = req;
  const vaksinService = new VaksinService();

  switch (method) {
    case "GET":
      try {
        const reservasiVaksin = await ReservasiVaksinasi.find()
          .populate("userId")
          .populate("vaksinId");

        // const reservasiVaksin = await ReservasiVaksinasi.find({});
        res.status(200).json({ success: true, data: reservasiVaksin });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case "POST":
      try {
        // get user data from request
        const {
          userId,
          vaksinId,
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
          vaksinId,
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
