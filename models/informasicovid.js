const mongoose = require('mongoose');

const InformasiCovidSchema = new mongoose.Schema({
    no: {
        type: Number,
        required: true,
        unique: true,
    },
    provinsi: {
        type: String,
        required: true,
    },
    positif: {
        type: Number,
        required: true,
    },
    sembuh: {
        type: Number,
        required: true,
    },
    meninggal: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.models.InformasiCovid || mongoose.model('InformasiCovid', InformasiCovidSchema);