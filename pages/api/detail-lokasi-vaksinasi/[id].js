import dbConnect from "../../../utils/dbConnect";
import LokasiVaksinasi from "../../../models/lokasivaksinasi";
import VaksinService from "../../../service/Vaksin";
import ClientError from "../../../expecptions/ClientError";

dbConnect();

const DetailLokasiVaksin = async (req, res) => {
  const { method } = req;
  const vaksinService = new VaksinService();

  switch (method) {
    case "DELETE":
      try {
        const { id } = req.query;

        await vaksinService.deleteLokasi(id);

        return res.status(200).json({
          success: true,
          message: "Success delete Location Vaccine",
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

module.exports = DetailLokasiVaksin;
