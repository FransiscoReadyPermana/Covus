import dbConnect from "../../../utils/dbConnect";
import RsService from "../../../service/RsRujukan";
import ClientError from "../../../expecptions/ClientError";

dbConnect();

const RsRujukan = async (req, res) => {
  const { method } = req;
  const rsService = new RsService();

  switch (method) {
    case "DELETE":
      try {
        const { id } = req.query;

        await rsService.deleteRs(id);

        return res.status(200).json({
          success: true,
          message: "Success delete Reservation",
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

module.exports = RsRujukan;
