import NotFoundError from "../expecptions/NotFoundError";
import ReservasiVaksinasi from "../models/reservasi";
import LokasiVaksinasi from "../models/lokasivaksinasi";

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

  async createLokasiVaksin({
    provinsi,
    img,
    jenisVaksin,
    nama,
    tanggal,
    waktu,
    lokasi1,
    lokasi2,
    namaVaksin,
  }) {
    const newLokasiVaksin = new LokasiVaksinasi({
      provinsi,
      img,
      jenisVaksin,
      nama,
      tanggal,
      waktu,
      lokasi1,
      lokasi2,
      namaVaksin,
    });

    const lokasiVaksin = await newLokasiVaksin.save();
    return lokasiVaksin._id;
  }

  async deleteReservasi(id) {
    const reservasi = await ReservasiVaksinasi.findById(id);

    if (!reservasi) {
      throw new NotFoundError("Failed delete reservasi. Id not found");
    }

    const result = await ReservasiVaksinasi.deleteOne({ _id: id });

    return result;
  }

  async deleteLokasi(id) {
    const lokasi = await LokasiVaksinasi.findById(id);

    if (!lokasi) {
      throw new NotFoundError("Failed Delete. Id not found");
    }

    const result = await LokasiVaksinasi.deleteOne({ _id: id });

    return result;
  }

  async editVaksin(
    _id,
    {
      provinsi,
      img,
      jenisVaksin,
      nama,
      tanggal,
      waktu,
      lokasi1,
      lokasi2,
      namaVaksin,
    }
  ) {
    const data = await LokasiVaksinasi.findOne({ _id });

    data.provinsi = provinsi ?? data.provinsi;
    data.img = img ?? data.img;
    data.jenisVaksin = jenisVaksin ?? data.jenisVaksin;
    data.nama = nama ?? data.nama;
    data.tanggal = tanggal ?? data.tanggal;
    data.waktu = waktu ?? data.waktu;
    data.lokasi1 = lokasi1 ?? data.lokasi1;
    data.lokasi2 = lokasi2 ?? data.lokasi2;
    data.namaVaksin = namaVaksin ?? data.namaVaksin;

    await data.save();
    return data;
  }
}

export default VaksinService;
