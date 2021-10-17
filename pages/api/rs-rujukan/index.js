import dbConnect from "../../../utils/dbConnect";
import Hospital from "../../../models/rsrujukan";

dbConnect();

const hospital = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const hospitals = await Hospital.find({});
                res.status(200).json({ success: true, data: hospitals })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const hospitals = await Hospital.create(req.body);
                res.status(201).json({ success: true, data: hospitals })
            } catch (error) {
                res.status(400).json({ success: false});
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}

module.exports = hospital;