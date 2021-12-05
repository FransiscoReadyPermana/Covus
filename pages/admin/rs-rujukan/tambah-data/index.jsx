import React from "react";
import { useState, useEffect } from "react";
import Headline from "../../../../Components/Headline";
import Title from "../../../../Components/title";
import styles from "../../tambah.module.css";
import EyeShow from "../../../../Components/icons/EyeShow";
import EyeHide from "../../../../Components/icons/EyeHide";
import Link from "next/link";
import DropDownEdit from "../../../../Components/dropDown";
import bulan from "../../../../data/Bulan";
import Footer from "../../../../Components/footer";

export default function TambahData() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [mountValue, setMountValue] = useState("");
  const [errorNama, setErrorNama] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorTanggal, setErrorTanggal] = useState(null);
  const [errorBulan, setErrorBulan] = useState(null);
  const [errorTahun, setErrorTahun] = useState(null);
  const [errorJenisKelamin, setErrorJenisKelamin] = useState(null);
  const [errorAlamat, setErrorAlamat] = useState(null);
  const [errorKataSandi, setErrorKataSandi] = useState(null);
  const [errorCKataSandi, setErrorCKataSandi] = useState(null);
  const [errorSetuju, setErrorSetuju] = useState(null);

  let placeholderColor;
  if (mountValue === "") {
    placeholderColor = styles.placeHolderDefault;
  } else {
    placeholderColor = styles.placeHolder;
  }

  const [formUser, setFormUser] = useState({
    provinsi: "",
    nama: "",
    alamat: "",
    telp: "",
  });

  const handleRegister = async (e) => {
    // checkInput(e);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      provinsi: formUser.provinsi,
      nama: formUser.nama,
      alamat: formUser.alamat,
      telp: formUser.telp,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const baseUrl = process.env.BASE_URL;

    const response = await fetch(
      `${baseUrl}api/lokasi-vaksinasi`,
      requestOptions
    );
    const result = await response.json();

    if (result.success) {
      alert("Berhasil");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="h-screen w-full">
      <section id="first" className={`${styles.section1} w-full relative`}>
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className="w-full flex flex-col items-center h-full pt-80 bg-white pb-20"
        >
          <Title color="dark-grey">TAMBAH DATA RUMAH SAKIT RUJUKAN</Title>
          <form action="#" className={`flex flex-col gap-8 ${styles.form}`}>
            <div id="provinsi">
              <label htmlFor="provinsi">Nama Provinsi</label>
              <input
                type="text"
                id="provinsi"
                placeholder="Masukkan Provinsi"
                onChange={(e) =>
                  setFormUser({ ...formUser, provinsi: e.target.value })
                }
              />
              {/* {errorNama && <p className="mt-2 ml-2 text-red">{errorNama}</p>} */}
            </div>
            <div id="img">
              <label htmlFor="email">Gambar Rumah Sakit</label>
              <input
                type="text"
                id="img"
                placeholder="Masukkan Link Gambar"
                onChange={(e) =>
                  setFormUser({ ...formUser, img: e.target.value })
                }
              />
              {/* {errorEmail && <p className="mt-2 ml-2 text-red">{errorEmail}</p>} */}
            </div>

            <div id="jenis-vaksin">
              <label htmlFor="jenis kelamin">Jenis Vaksinasi</label>
              <div className="flex gap-8 ml-8 mt-5">
                <div id="pertama" className="flex items-center">
                  <input
                    type="radio"
                    id="vaksin-pertama"
                    name="Jenis Vaksin"
                    value="Vaksinasi Pertama"
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisVaksin: e.target.value })
                    }
                  />
                  <label htmlFor="vaksin-pertama">Vaksinasi Pertama</label>
                </div>

                <div id="kedua" className="flex items-center">
                  <input
                    type="radio"
                    id="vaksin-kedua"
                    name="Jenis Vaksin"
                    value="Vaksinasi Kedua"
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisVaksin: e.target.value })
                    }
                  />
                  <label htmlFor="vaksin-kedua">Vaksinasi Kedua</label>
                </div>
              </div>
              {/* {errorJenisKelamin && (
                <p className="mt-2 ml-2 text-red">{errorJenisKelamin}</p>
              )} */}
            </div>
            <div id="nama">
              <label htmlFor="nama-penyelenggara">Nama Penyelenggara</label>
              <input
                type="text"
                id="nama-penyelenggara"
                placeholder="Masukkan Nama Penyelenggara"
                onChange={(e) =>
                  setFormUser({ ...formUser, penyelenggara: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="tgl">
              <label htmlFor="tanggal">Tanggal Diselenggarakan</label>
              <input
                type="text"
                id="tanggal"
                placeholder="Masukkan Tanggal Dilaksanakan"
                onChange={(e) =>
                  setFormUser({ ...formUser, tanggal: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="time">
              <label htmlFor="waktu">Waktu Diselenggarakan</label>
              <input
                type="text"
                id="waktu"
                placeholder="Masukkan Waktu Dilaksanakan"
                onChange={(e) =>
                  setFormUser({ ...formUser, waktu: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="lokasi">
              <label htmlFor="lokasi1">Tempat Vaksinasi</label>
              <input
                type="text"
                id="lokasi1"
                placeholder="Masukkan Tempat Vaksinasi"
                onChange={(e) =>
                  setFormUser({ ...formUser, lokasi1: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="lokasi">
              <label htmlFor="lokasi2">Lokasi Vaksinasi</label>
              <input
                type="text"
                id="lokasi2"
                placeholder="Masukkan Lokasi Vaksinasi"
                onChange={(e) =>
                  setFormUser({ ...formUser, lokasi2: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="nama-vaksin">
              <label htmlFor="nama vaksin">Nama Vaksinasi</label>
              <div className="flex gap-8 ml-8 mt-5">
                <div id="pertama" className="flex items-center">
                  <input
                    type="checkbox"
                    id="Astrazeneca"
                    name="namaVaksin"
                    value="Astrazeneca"
                    onChange={(e) => NamaVaksin(e)}
                  />
                  <label htmlFor="Astrazeneca">Astrazeneca</label>
                </div>
                <div id="kedua" className="flex items-center">
                  <input
                    type="checkbox"
                    id="Pfizer"
                    name="namaVaksin"
                    value="Pfizer"
                    onChange={(e) => NamaVaksin(e)}
                  />
                  <label htmlFor="Pfizer">Pfizer</label>
                </div>

                <div id="tiga" className="flex items-center">
                  <input
                    type="checkbox"
                    id="Sinovac"
                    name="namaVaksin"
                    value="Sinovac"
                    onChange={(e) => NamaVaksin(e)}
                  />
                  <label htmlFor="Sinovac">Sinovac</label>
                </div>

                <div id="empat" className="flex items-center">
                  <input
                    type="checkbox"
                    id="Moderna"
                    name="namaVaksin"
                    value="Moderna"
                    onChange={(e) => NamaVaksin(e)}
                  />
                  <label htmlFor="Moderna">Moderna</label>
                </div>
              </div>
              {/* {errorJenisKelamin && (
                <p className="mt-2 ml-2 text-red">{errorJenisKelamin}</p>
              )} */}
            </div>

            <input
              type="submit"
              value="Tambah Data Vaksinasi"
              className="bg-purple text-white py-3 rounded-3xl mt-4"
              onClick={(e) => {
                handleRegister(e);
              }}
            />
          </form>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
