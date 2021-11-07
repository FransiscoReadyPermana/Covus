import dbConnect from "../../../utils/dbConnect";
import VaksinasiProvinsiKedua from "../../../models/vaksinasiprovinsikedua.js";

dbConnect();

const vaksinasiProvinsiKedua = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const vaksinProvinsiKedua = await VaksinasiProvinsiKedua.find({});
                res.status(200).json({ success: true, data: vaksinProvinsiKedua })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const vaksinProvinsiKedua = await VaksinasiProvinsiKedua.create(req.body);
                res.status(201).json({ success: true, data: vaksinProvinsiKedua })
            } catch (error) {
                res.status(400).json({ success: false});
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}

module.exports = vaksinasiProvinsiKedua;