const mongoose = require("mongoose");

const VaksinasiProvinsiKeduaSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
});

module.exports =
  mongoose.models.VaksinasiProvinsiKedua ||
  mongoose.model("VaksinasiProvinsiKedua", VaksinasiProvinsiKeduaSchema);
