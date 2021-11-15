const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  tanggal: {
    type: Number,
    required: true,
  },
  bulan: {
    type: String,
    required: true,
  },
  tahun: {
    type: Number,
    required: true,
  },
  jenisKelamin: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  kataSandi: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.User || mongoose.model('User', UserSchema);
