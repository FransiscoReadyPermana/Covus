import dbConnect from "../../../utils/dbConnect";
import Hospital from "../../../models/rsrujukan";
import RsService from "../../../service/RsRujukan";

dbConnect();

const hospital = async (req, res) => {
  const rsService = new RsService();
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const hospitals = await Hospital.find({});
        res.status(200).json({ success: true, data: hospitals });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        // get user data from request
        const { provinsi, nama, alamat, telp } = req.body;

        // create user
        const rsId = await rsService.createRs({
          provinsi,
          nama,
          alamat,
          telp,
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
        const { provinsi, nama, alamat, telp, _id } = req.body;

        // create user
        const rsId = await rsService.editRs(_id, {
          provinsi,
          nama,
          alamat,
          telp,
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

module.exports = hospital;
