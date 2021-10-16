const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    no: {
        type: Number,
        required: true,
        unique: true,
    },
    provinsi: {
        type: String,
        required: true,
    },
    nama: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: true,
    },
    telp: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.Hospital || mongoose.model('Hospital', HospitalSchema);