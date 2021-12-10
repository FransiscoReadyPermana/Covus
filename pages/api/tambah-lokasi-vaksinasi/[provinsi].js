import dbConnect from "../../../utils/dbConnect";
import LokasiVaksinasi from "../../../models/lokasivaksinasi";
import VaksinService from "../../../service/Vaksin";

dbConnect();

const lokasiVaksin = async (req, res) => {
  const { method } = req;
  const vaksinService = new VaksinService();

  switch (method) {
    case "POST":
      try {
        // get user data from request
        const {
          vaksinId,
          img,
          jenisVaksin,
          nama,
          tanggal,
          waktu,
          lokasi1,
          lokasi2,
          namaVaksin,
        } = req.body;

        const { provinsi } = req.query;
        // create user
        const IdVaksin = await vaksinService.tambahLokasiVaksin(provinsi, {
          vaksinId,
          img,
          jenisVaksin,
          nama,
          tanggal,
          waktu,
          lokasi1,
          lokasi2,
          namaVaksin,
        });

        return res.status(201).json({
          success: true,
          message: "berhasil",
        });
      } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
      }

      case "PUT":
        try {
          const {
            _id,
            
            img,
            jenisVaksin,
            nama,
            tanggal,
            waktu,
            lokasi1,
            lokasi2,
            namaVaksin,
          } = req.body;

          const { provinsi } = req.query;
  
          await vaksinService.editVaksin(_id, provinsi, {
            img,
            jenisVaksin,
            nama,
            tanggal,
            waktu,
            lokasi1,
            lokasi2,
            namaVaksin,
          });
  
          return res.status(200).json({
            success: true,
            message: "Berhasil Memperbaharui Data",
          });
        } catch (error) {
          res.status(400).json({ success: false, message: error.message });
        }

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = lokasiVaksin;
