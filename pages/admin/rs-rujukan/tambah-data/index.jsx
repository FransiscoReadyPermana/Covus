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

    const response = await fetch(`${baseUrl}api/rs-rujukan`, requestOptions);
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
            <div id="rs">
              <label htmlFor="email">Nama Rumah Sakit</label>
              <input
                type="text"
                id="nama"
                placeholder="Masukkan Nama Rumah Sakit"
                onChange={(e) =>
                  setFormUser({ ...formUser, nama: e.target.value })
                }
              />
              {/* {errorEmail && <p className="mt-2 ml-2 text-red">{errorEmail}</p>} */}
            </div>

            <div id="address">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="alamat"
                placeholder="Masukkan Alamat"
                onChange={(e) =>
                  setFormUser({ ...formUser, alamat: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="telp">
              <label htmlFor="telpon">Nomor Telepon</label>
              <input
                type="text"
                id="telpon"
                placeholder="Masukkan Nomor Telepon"
                onChange={(e) =>
                  setFormUser({ ...formUser, telp: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
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
