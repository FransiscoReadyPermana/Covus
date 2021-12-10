import React from "react";
import { useState, useEffect } from "react";
import Headline from "../../../../Components/Headline";
import Title from "../../../../Components/title";
import styles from "../../tambah.module.css";
import EyeShow from "../../../../Components/icons/EyeShow";
import EyeHide from "../../../../Components/icons/EyeHide";
import Link from "next/link";
import DropDownEdit from "../../../../Components/dropDown";
import Footer from "../../../../Components/footer";
import AdminOnly from "../../../../Components/adminOnly";
import { getSession } from "next-auth/client";

export default function TambahData({ user, data, namaProvinsi }) {
  const emailAdmin = process.env.ADMIN;

  if (user.name !== "admin" && user.email !== emailAdmin) {
    return (
      <div>
        <AdminOnly />
      </div>
    );
  }

  const [formUser, setFormUser] = useState({
    provinsi: "",
    img: "",
    jenisVaksin: "",
    penyelenggara: "",
    tanggal: "",
    waktu: "",
    lokasi1: "",
    lokasi2: "",
    namaVaksin: [],
  });

  const NamaVaksin = (e) => {
    let namaVaksin = formUser.namaVaksin;
    if (e.target.checked) {
      namaVaksin = [...formUser.namaVaksin, e.target.value];
    } else {
      namaVaksin = formUser.namaVaksin.filter((d) => d !== e.target.value);
    }
    setFormUser({
      ...formUser,
      namaVaksin,
    });
  };

  const handleRegister = async (e) => {
    // checkInput(e);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      // provinsi: formUser.provinsi,
      img: formUser.img,
      jenisVaksin: formUser.jenisVaksin,
      nama: formUser.penyelenggara,
      tanggal: formUser.tanggal,
      waktu: formUser.waktu,
      lokasi1: formUser.lokasi1,
      lokasi2: formUser.lokasi2,
      namaVaksin: formUser.namaVaksin,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(raw);
    const baseUrl = process.env.BASE_URL;

    const response = await fetch(
      `${baseUrl}api/tambah-lokasi-vaksinasi/${formUser.provinsi}`,
      requestOptions
    );
    const result = await response.json();

    if (result.success) {
      alert("Berhasil");
      // clearError();
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } else {
      alert(result.message);
    }
  };

  if (user.name !== "admin" && user.email !== emailAdmin) {
    return (
      <div className="pt-40">
        <AdminOnly />
      </div>
    );
  }

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
          <Title color="dark-grey">TAMBAH DATA LOKASI VAKSINASI</Title>
          <form action="#" className={`flex flex-col gap-8 ${styles.form}`}>
            <div id="provinsi">
              <label htmlFor="provinsi">Nama Provinsi</label>

              <DropDownEdit
                className="w-full"
                color="purple"
                placeholder="Pilih Provinsi"
                option={namaProvinsi}
                onChange={(e) => {
                  setFormUser({ ...formUser, provinsi: e });
                }}
              />

              {/* <input
                type="text"
                id="provinsi"
                placeholder="Masukkan Provinsi"
                onChange={(e) =>
                  setFormUser({ ...formUser, provinsi: e.target.value })
                }
              /> */}
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

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const user = session.user;

  const baseUrl = process.env.BASE_URL;
  const vaksinasiPertama = await fetch(`${baseUrl}api/vaksinasi-provinsi`);
  const resultPertama = await vaksinasiPertama.json();

  const namaProvinsi = resultPertama.data.map((item) => item.nama);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
      data: resultPertama.data,
      namaProvinsi,
    },
  };
}
