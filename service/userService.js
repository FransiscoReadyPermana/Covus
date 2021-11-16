import bcrypt from 'bcrypt';
import User from '../models/user';
import { EXIST_DATA } from '../lib/constantErrorType';
import InvariantError from '../expecptions/InvariantError';

class UserService {
  async createUser({
    nama,
    email,
    tanggal,
    bulan,
    tahun,
    jenisKelamin,
    alamat,
    kataSandi,
  }) {
    const hashedPassword = await bcrypt.hash(kataSandi, 10);

    const newUser = new User({
      nama: nama.trim(),
      email,
      tanggal,
      bulan,
      tahun,
      jenisKelamin,
      alamat,
      kataSandi: hashedPassword,
    });

    const user = await newUser.save();

    return user._id;
  }

  async emailExists(email) {
    const user = await User.findOne({ email });

    if (user) {
      throw new InvariantError('Email already exists', EXIST_DATA);
    }

    return false;
  }
}

export default UserService;
