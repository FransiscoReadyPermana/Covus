import NotFoundError from "../expecptions/NotFoundError";
import RsRujukan from "../models/rsrujukan";

class RsService {
  async deleteRs(id) {
    const rs = await RsRujukan.findById(id);

    if (!rs) {
      throw new NotFoundError("Failed delete Hospitals. Id not found");
    }

    const result = await RsRujukan.deleteOne({ _id: id });

    return result;
  }

  async createRs({ provinsi, nama, alamat, telp }) {
    const newRs = new RsRujukan({
      provinsi,
      nama: nama.trim(),
      alamat,
      telp,
    });
    const rsakit = await newRs.save();
    return rsakit._id;
  }

  async editRs(_id, { provinsi, nama, alamat, telp }) {
    const data = await RsRujukan.findOne({ _id });

    data.provinsi = provinsi ?? data.provinsi;
    data.nama = nama ?? data.nama;
    data.alamat = alamat ?? data.alamat;
    data.telp = telp ?? data.telp;

    await data.save();
    return data;
  }
}

export default RsService;
