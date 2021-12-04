import NotFoundError from "../expecptions/NotFoundError";
import ReservasiVaksinasi from "../models/reservasi";

class VaksinService {
  async createVaksin({
    userId,
    vaksinId,
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
      vaksinId,
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
  async deleteReservasi(id) {
    const reservasi = await ReservasiVaksinasi.findById(id);

    if (!reservasi) {
      throw new NotFoundError("Failed delete reservasi. Id not found");
    }

    const result = await ReservasiVaksinasi.deleteOne({ _id: id });

    return result;
  }
}

export default VaksinService;
