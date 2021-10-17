import dbConnect from "../../../utils/dbConnect";
import InformasiCovid from "../../../models/informasicovid";

dbConnect();

const informasicovid = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const informasicovids = await InformasiCovid.find({});
                res.status(200).json({ success: true, data: informasicovids })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const informasicovids = await InformasiCovid.create(req.body);
                res.status(200).json({ success: true, data: informasicovids })
            } catch (error) {
                res.status(400).json({ success: false});
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}

module.exports = informasicovid;