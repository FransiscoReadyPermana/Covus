import dbConnect from "../../../utils/dbConnect";
import LokasiVaksinasi from "../../../models/lokasivaksinasi";
import VaksinService from "../../../service/Vaksin";

dbConnect();

const lokasiVaksin = async (req, res) => {
  const { method } = req;
  const vaksinService = new VaksinService();

  switch (method) {
    case "GET":
      try {
        const provinsiVaksin = await LokasiVaksinasi.find().populate(
          "vaksinId"
        );

        res.status(200).json({ success: true, data: provinsiVaksin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const {
          _id,
          provinsi,
          img,
          jenisVaksin,
          nama,
          tanggal,
          waktu,
          lokasi1,
          lokasi2,
          namaVaksin,
        } = req.body;

        await vaksinService.editVaksin(_id, {
          provinsi,
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
