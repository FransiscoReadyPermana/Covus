import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/user';

dbConnect();

const user = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const users = await User.create(req.body);
        res.status(201).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, msg: 'user sudah ada' });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

module.exports = user;
