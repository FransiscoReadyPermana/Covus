import React from "react";
import { useState } from "react";
import Headline from "../../Components/headline";
import Title from "../../Components/title";
import styles from "./signUp.module.css";
import EyeShow from "../../Components/icons/EyeShow";
import EyeHide from "../../Components/icons/EyeHide";
import Link from "next/link";
import DropDownEdit from "../../Components/dropDown";
import bulan from "../../data/Bulan";
import Footer from "../../Components/footer";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [mountValue, setMountValue] = useState("");

  const [formUser, setFormUser] = useState({
    nama: "",
    email: "",
    tanggal: "",
    bulan: "",
    tahun: "",
    jenisKelamin: "",
    alamat: "",
    kataSandi: "",
    CKataSandi: "",
    setuju: false,
  });

  return (
    <div>
      <section
        id="fifth"
        className={`${styles.section5} w-full relative pb-20`}
      >
        <div
          id="divider"
          className={`${styles.bgFourthSection} h-52 w-full absolute top-0`}
        />

        <div id="content" className="h-full w-full pl-0 pt-60 bg-white">
          <Headline className="text-center text-dark-grey">
            Daftar Sekarang
          </Headline>
          <Title className={`text-center text-dark-grey mt-7 ${styles.title}`}>
            Buat Akun Covus untuk Pendaftaran Vaksinasi Covid-19
          </Title>
          <form action="#" className={`flex flex-col gap-8 ${styles.form}`}>
            <div id="nama">
              <label htmlFor="nama">Nama Lengkap</label>
              <input
                type="text"
                id="nama"
                placeholder="Masukkan Nama Lengkap"
                onChange={(e) =>
                  setFormUser({ ...formUser, nama: e.target.value })
                }
              />
            </div>
            <div id="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Masukkan Email"
                onChange={(e) =>
                  setFormUser({ ...formUser, email: e.target.value })
                }
              />
            </div>
            <div id="tanggal" className="flex flex-col">
              <label htmlFor="tanggal">Tanggal Lahir</label>
              <div className="flex gap-28 items-end">
                <input
                  type="number"
                  id="tanggal"
                  placeholder="Tanggal"
                  onChange={(e) =>
                    setFormUser({ ...formUser, tanggal: e.target.value })
                  }
                />
                <DropDownEdit
                  className={`w-full`}
                  color="white"
                  placeholder="Bulan"
                  option={bulan}
                  value={mountValue}
                  onChange={(e) => {
                    setMountValue(e);
                    setFormUser({ ...formUser, bulan: e });
                  }}
                  classNameControl={`${styles.control}`}
                  classNameArrow={`${styles.arrow}`}
                  placeholderClassName={`${styles.placeholderDropdown}`}
                />
                <input
                  type="number"
                  id="Tahun"
                  placeholder="Tahun"
                  onChange={(e) =>
                    setFormUser({ ...formUser, tahun: e.target.value })
                  }
                />
              </div>
            </div>
            <div id="jenis kelamin">
              <label htmlFor="jenis kelamin">Jenis Kelamin</label>
              <div className="flex gap-8 ml-8 mt-5">
                <div id="Male" className="flex items-center">
                  <input
                    type="radio"
                    id="laki"
                    name="jenis kelamin"
                    value="laki-laki"
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisKelamin: e.target.value })
                    }
                  />
                  <label htmlFor="laki">Laki-laki</label>
                </div>
                <div id="Female" className="flex items-center">
                  <input
                    type="radio"
                    id="perempuan"
                    name="jenis kelamin"
                    value="perempuan"
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisKelamin: e.target.value })
                    }
                  />
                  <label htmlFor="perempuan">Perempuan</label>
                </div>
                <div id="Other" className="flex items-center">
                  <input
                    type="radio"
                    id="lainnya"
                    name="jenis kelamin"
                    value="lainnya"
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisKelamin: e.target.value })
                    }
                  />
                  <label htmlFor="lainnya">Lainnya</label>
                </div>
              </div>
            </div>
            <div id="alamat">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="email"
                placeholder="Masukkan Alamat Lengkap"
                onChange={(e) =>
                  setFormUser({ ...formUser, alamat: e.target.value })
                }
              />
            </div>
            <div id="password">
              <label htmlFor="password">Kata Sandi</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                  onChange={(e) =>
                    setFormUser({ ...formUser, kataSandi: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-4 top-6"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeHide /> : <EyeShow />}
                </button>
              </div>
            </div>
            <div id="Cpassword">
              <label htmlFor="Cpassword">Konfirmasi Kata Sandi</label>
              <div className="relative">
                <input
                  type={showPassword2 ? "text" : "password"}
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                  onChange={(e) =>
                    setFormUser({ ...formUser, CKataSandi: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-4 top-6"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? <EyeHide /> : <EyeShow />}
                </button>
              </div>
            </div>
            <div id="sk" className="flex items-center">
              <input
                type="checkbox"
                id="radio"
                className={`${styles.radio}`}
                onChange={(e) =>
                  setFormUser({ ...formUser, setuju: e.target.checked })
                }
              />
              <label htmlFor="radio">
                Dengan ini saya telah menyetujui
                <span className="text-purple">
                  <Link href="/"> Syarat dan Ketentuan </Link>
                </span>
                yang berlaku
              </label>
            </div>
            <input
              type="submit"
              value="Daftar Sekarang"
              className="bg-purple text-white py-3 rounded-3xl"
            />
          </form>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
