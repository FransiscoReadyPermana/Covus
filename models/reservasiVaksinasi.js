const mongoose = require('mongoose');

const ReservasiVaksinasiSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  provinsi: {
    type: String,
    required: true,
  },
  jenisVaksin: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    required: true,
  },
  waktu: {
    type: String,
    required: true,
  },
  lokasi1: {
    type: String,
    required: true,
  },
  lokasi2: {
    type: String,
    required: true,
  },
  namaVaksin: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.ReservasiVaksinasiSchema ||
  mongoose.model('ReservasiVaksinasi', ReservasiVaksinasiSchema);
