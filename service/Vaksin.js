import ReservasiVaksinasi from "../models/reservasi";

class VaksinService {
  async createVaksin({
    userId,
    provinsi,
    nama,
    namaVaksin,
    tanggal,
    waktu,
    lokasi1,
    lokasi2,
    jenisVaksin,
    kontradiksi,
  }) {
    const newVaksin = new ReservasiVaksinasi({
      userId,
      provinsi,
      nama,
      namaVaksin,
      tanggal,
      waktu,
      lokasi1,
      lokasi2,
      jenisVaksin,
      kontradiksi,
    });

    const vaksin = await newVaksin.save();
    return vaksin._id;
  }
}

export default VaksinService;
