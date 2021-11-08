import dbConnect from "../../../utils/dbConnect";
import LokasiVaksinasi from "../../../models/lokasivaksinasi";
import lokasivaksinasi from "../../../models/lokasivaksinasi";

dbConnect();

const hospital = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const lokasivaksin = await Hospital.find({});
        res.status(200).json({ success: true, data: lokasivaksin });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const lokasivaksin = await Hospital.create(req.body);
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

module.exports = lokasivaksinasi;
