const mongoose = require("mongoose");

const LokasiVaksinasiSchema = new mongoose.Schema({
  provinsi: {
    type: String,
    required: true,
  },
  img: {
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
    type: Array,
    required: true,
  },
});

module.exports =
  mongoose.models.LokasiVaksinasi ||
  mongoose.model("LokasiVaksinasi", LokasiVaksinasiSchema);
