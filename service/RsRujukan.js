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
}

export default RsService;
