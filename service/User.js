import bcrypt from 'bcrypt';
import User from '../models/user';
import { EXIST_DATA } from '../lib/constantErrorType';
import InvariantError from '../expecptions/InvariantError';

class UserService {
  async editPassword(nama, { kataSandi, kataSandiBaru }) {
    const user = await User.findOne({ nama: nama });

    const isPasswordMatch = await bcrypt.compare(kataSandi, user.kataSandi);

    if (!isPasswordMatch) {
      throw new InvariantError('Password not match', EXIST_DATA);
    }

    const hashedPassword = await bcrypt.hash(kataSandiBaru, 10);

    console.log(hashedPassword);

    user.kataSandi = hashedPassword ?? user.kataSandi;

    await user.save();
    return user;
  }

  async editUser(email, { nama, tanggal, bulan, tahun, alamat, kataSandi }) {
    const user = await User.findOne({ email: email });

    user.nama = nama ?? user.nama;
    user.tanggal = tanggal ?? user.tanggal;
    user.bulan = bulan ?? user.bulan;
    user.tahun = tahun ?? user.tahun;
    user.alamat = alamat ?? user.alamat;
    user.kataSandi = kataSandi ?? user.kataSandi;

    await user.save();
    return user;
  }

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
