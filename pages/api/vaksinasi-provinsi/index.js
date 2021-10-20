import dbConnect from "../../../utils/dbConnect";
import VaksinasiProvinsi from "../../../models/vaksinasiprovinsi.js";

dbConnect();

const vaksinasiProvinsi = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const vaksinProvinsi = await VaksinasiProvinsi.find({});
                res.status(200).json({ success: true, data: vaksinProvinsi })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const vaksinProvinsi = await VaksinasiProvinsi.create(req.body);
                res.status(201).json({ success: true, data: vaksinProvinsi })
            } catch (error) {
                res.status(400).json({ success: false});
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}

module.exports = vaksinasiProvinsi;