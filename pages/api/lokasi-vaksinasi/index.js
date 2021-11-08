import dbConnect from "../../../utils/dbConnect";
import LokasiVaksinasi from "../../../models/lokasivaksinasi";

dbConnect();

const lokasiVaksin = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const lokasivaksin = await LokasiVaksinasi.find({});
        res.status(200).json({ success: true, data: lokasivaksin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const lokasivaksin = await LokasiVaksinasi.create(req.body);
        res.status(201).json({ success: true, data: lokasivaksin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = lokasiVaksin;
