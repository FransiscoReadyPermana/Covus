const mongoose = require('mongoose');

const VaksinasiProvinsiSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    nama: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.models.VaksinasiProvinsi || mongoose.model('VaksinasiProvinsi', VaksinasiProvinsiSchema);