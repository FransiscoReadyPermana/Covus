import Joi from "joi";

const UserPayloadSchema = Joi.object({
  nama: Joi.string().required().min(3).max(50),
  email: Joi.string().email().required(),
  tanggal: Joi.number().required(),
  bulan: Joi.string().required(),
  tahun: Joi.number().required(),
  jenisKelamin: Joi.string().required(),
  alamat: Joi.string().required().min(3).max(100),
  kataSandi: Joi.string().required().min(8).max(20),
});

export { UserPayloadSchema };
