import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "../../../Components/footer";
import Title from "../../../Components/title";
import styles from "../../../styles/validasi.module.css";
import uuid from "react-uuid";
import PopUpSK from "../../../Components/pop-up/pop-up-SK";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

export default function ValidasiVaksinasi({ data, user }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formUser, setFormUser] = useState({
    namaVaksin: "",
    kontradiksi: [],
    setuju: false,
  });
  const [errorSetuju, setErrorSetuju] = useState("");
  const [errorNamaVaksin, setErrorNamaVaksin] = useState("");

  const Kontradiksi = (e) => {
    let kontradiksi = formUser.kontradiksi;
    if (e.target.checked) {
      kontradiksi = [...formUser.kontradiksi, e.target.value];
    } else {
      kontradiksi = formUser.kontradiksi.filter((d) => d !== e.target.value);
    }
    setFormUser({
      ...formUser,
      kontradiksi,
    });
  };

  const setujuCheck = () => {
    if (formUser.setuju === false) {
      setErrorSetuju("Anda harus menyetujui syarat dan ketentuan");
    } else {
      setErrorSetuju(null);
    }
  };

  const namaVaksinCheck = () => {
    if (formUser.namaVaksin === "" || formUser.namaVaksin === null) {
      setErrorNamaVaksin("Jenis Vaksin tidak boleh kosong");
    } else {
      setErrorNamaVaksin(null);
    }
  };

  const checkInput = (e) => {
    e.preventDefault();
    namaVaksinCheck();
    setujuCheck();
  };

  const handleRegister = async (e) => {
    checkInput(e);


    if (
      !(formUser.namaVaksin === "" || formUser.namaVaksin === null) &&
      !(formUser.setuju === false)
    ) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        userId: user._id,
        vaksinId: data[0]._id,
        provinsi: data[0].provinsi,
        nama: data[0].nama,
        jenisVaksin: data[0].jenisVaksin,
        tanggal: data[0].tanggal,
        waktu: data[0].waktu,
        lokasi1: data[0].lokasi1,
        lokasi2: data[0].lokasi2,
        namaVaksin: formUser.namaVaksin,
        kontradiksi: formUser.kontradiksi,
      });

      const requestOptions = {
        method: "POST",
        body: raw,
        headers: myHeaders,
      };

      const baseUrl = process.env.BASE_URL;
      const response = await fetch(
        `${baseUrl}/api/reservasi-vaksinasi`,
        requestOptions
      );
      const result = await response.json();


      if (result.success) {
        alert("Berhasil");
        location.reload();
      } else {
        alert(result.message);
       
      }
    }
  };

  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`${styles.section1} w-full h-full relative bg-purple pb-24`}
      >
        <div id="container" className="bg-purple h-full">
          <div
            id="container-header"
            className="bg-purple flex flex-col items-center pt-36"
          >
            <Title color="white">PERIKSA KEMBALI DATA ANDA</Title>

            <div
              id="container-konten"
              className={`flex flex-col items-center bg-white w-1/2 mt-4 pb-10 pt-6 ${styles.container_konten}`}
            >
              <div
                id="vaksin-keberapa"
                className="flex flex-row justify-center items-center gap-16"
              >
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Vaksinasi COVUS 2021
                </p>

                <p
                  color="dark-grey"
                  className="text-center font-medium text-xl text-white bg-purple px-10 py-2 rounded-full"
                >
                  {data[0].jenisVaksin}
                </p>
              </div>

              <div id="divider" className="gap-4 w-full px-12">
                <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />
              </div>

              <div
                id="container-isi-konten"
                className="flex flex-row gap-4 w-full px-12"
              >
                <div id="nama-penyelenggara" className="flex flex-col w-1/3">
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-xl text-dark-grey"
                  >
                    Nama Penyelenggara
                  </p>

                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-l text-dark-grey mt-4"
                  >
                    {data[0].nama}
                  </p>

                  <p
                    color="dark-grey"
                    className="text-left font-light text-l text-dark-grey mt-2"
                  >
                    {data[0].lokasi2}
                  </p>
                </div>

                <div id="tempat-waktu" className="flex flex-col w-1/3">
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-xl text-dark-grey"
                  >
                    Tempat dan Waktu
                  </p>
                  <div id="tempat" className="flex flex-row">
                    <div id="icon" className={"absolute h-6 w-6 mr-2 mt-4"}>
                      <Image
                        src="/images/Calendar.svg"
                        alt="reading-book-image"
                        layout="fill"
                      />
                    </div>

                    <p
                      color="dark-grey"
                      className="text-left font-light text-l text-dark-grey mt-4 ml-8"
                    >
                      {data[0].tanggal}
                    </p>
                  </div>

                  <div id="waktu" className="flex flex-row">
                    <div id="icon" className={"absolute h-6 w-6 mr-2 mt-2"}>
                      <Image
                        src="/images/Time.svg"
                        alt="reading-book-image"
                        layout="fill"
                      />
                    </div>

                    <p
                      color="dark-grey"
                      className="text-left font-light text-l text-dark-grey mt-2 ml-8"
                    >
                      {data[0].waktu}
                    </p>
                  </div>
                </div>

                <div id="lokasi" className="flex flex-col w-1/3">
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-xl text-dark-grey"
                  >
                    Lokasi Vaksinasi
                  </p>
                  <div id="lokasi" className="flex flex-row">
                    <div id="icon" className={"absolute h-6 w-6 mr-2 mt-4"}>
                      <Image
                        src="/images/Location.svg"
                        alt="reading-book-image"
                        layout="fill"
                      />
                    </div>

                    <p
                      color="dark-grey"
                      className="text-left font-light text-l text-dark-grey mt-4 ml-8"
                    >
                      {data[0].lokasi1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="second"
        className={`${styles.section2} w-full h-full relative flex flex-col items-center pb-24`}
      >
        <div
          id="divider"
          className={`${styles.dividerKetiga} h-10  w-full absolute`}
        />

        <div
          id="container-form"
          className="w-1/2 flex flex-col items-center mt-32"
        >
          <form action="#" className={`flex flex-col gap-8 ${styles.form}`}>
            <div id="radio-jenis-vaksin">
              <label htmlFor="jenis-vaksin">
                Jenis Vaksinasi yang akan dipilih
              </label>
              <div className="flex gap-2 ml-8 mt-5 flex-col">
                {data[0].namaVaksin.map((item) => (
                  <div
                    id="nama-vaksin"
                    className="flex items-center"
                    key={uuid()}
                  >
                    <input
                      type="radio"
                      id={item}
                      name="jenis-vaksin"
                      value={item}
                      checked={formUser.namaVaksin === item}
                      onChange={(e) =>
                        setFormUser({
                          ...formUser,
                          namaVaksin: e.target.value,
                        })
                      }
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
              {errorNamaVaksin && (
                <p className="mt-2 ml-8 text-red">{errorNamaVaksin}</p>
              )}
            </div>

            <div id="checkbox-penyakit" className="mt-4">
              <label htmlFor="penyakit" className={`${styles.judul}`}>
                Apakah Anda memiliki Kontradikasi Vaksin ?
              </label>
              <div className="flex gap-2 ml-8 mt-5 flex-col">
                <div id="jenis-satu" className="flex items-center">
                  <input
                    type="checkbox"
                    id="riwayat-satu"
                    name="penyakit-vaksin"
                    value="Menderita COVID-19 selama 3 bulan terakhir"
                    onChange={(e) => Kontradiksi(e)}
                  />

                  <label htmlFor="riwayat-satu">
                    Menderita COVID-19 selama 3 bulan terakhir
                  </label>
                </div>

                <div id="jenis-dua" className="flex items-center">
                  <input
                    type="checkbox"
                    id="riwayat-dua"
                    name="penyakit-vaksin"
                    value="Gejala ISPA seperti Batuk / Pilek / Sesak Napas selama 7
                    hari terakhir"
                    onChange={(e) => Kontradiksi(e)}
                  />
                  <label htmlFor="riwayat-dua">
                    Gejala ISPA seperti Batuk / Pilek / Sesak Napas selama 7
                    hari terakhir
                  </label>
                </div>

                <div id="jenis-tiga" className="flex flex-row items-start">
                  <input
                    type="checkbox"
                    id="riwayat-tiga"
                    name="penyakit-vaksin"
                    value="Kontak erat dengan Keluarga Serumah / Suspek / Konfirmasi /
                    Sedang dalam perawatan penyakit COVID-19"
                    className="absolute h-4"
                    onChange={(e) => Kontradiksi(e)}
                  />

                  <label htmlFor="riwayat-tiga" className="pl-5">
                    Kontak erat dengan Keluarga Serumah / Suspek / Konfirmasi /
                    Sedang dalam perawatan penyakit COVID-19
                  </label>
                </div>

                <div id="jenis-empat" className="flex items-center">
                  <input
                    type="checkbox"
                    id="riwayat-empat"
                    name="penyakit-vaksin"
                    value="Sedang dalam terapi jangka panjang terhadap penyakit
                    kelainan darah"
                    onChange={(e) => Kontradiksi(e)}
                  />
                  <label htmlFor="riwayat-empat">
                    Sedang dalam terapi jangka panjang terhadap penyakit
                    kelainan darah
                  </label>
                </div>

                <div id="jenis-lima" className="flex items-center">
                  <input
                    type="checkbox"
                    id="riwayat-lima"
                    name="penyakit-vaksin"
                    value="Memiliki penyakit Jantung (Gagal jantung / Penyakit jantung
                      coroner)"
                    onChange={(e) => Kontradiksi(e)}
                  />
                  <label htmlFor="riwayat-lima">
                    Memiliki penyakit Jantung (Gagal jantung / Penyakit jantung
                    coroner)
                  </label>
                </div>

                <div id="jenis-enam" className="flex items-center">
                  <input
                    type="checkbox"
                    id="riwayat-enam"
                    name="penyakit-vaksin"
                    value="Memiliki penyakit Autoimun Sistemik (SLE / Lupus / Sjogren /
                      Vaskulitis)"
                    onChange={(e) => Kontradiksi(e)}
                  />
                  <label htmlFor="riwayat-enam">
                    Memiliki penyakit Autoimun Sistemik (SLE / Lupus / Sjogren /
                    Vaskulitis)
                  </label>
                </div>

                <div id="jenis-tujuh" className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="riwayat-tujuh"
                    name="penyakit-vaksin"
                    value="Tidak Memiliki Riwayat Penyakit"
                    onChange={(e) => Kontradiksi(e)}
                  />
                  <label htmlFor="riwayat-tujuh">
                    Tidak Memiliki Riwayat Penyakit penyerta dan kondisi diatas
                  </label>
                </div>
              </div>
            </div>

            <PopUpSK
              open={isOpen}
              onClickBackground={() => setIsOpen(false)}
              onClick={() => setIsOpen(false)}
            />
            <div id="sk2">
              <div id="sk" className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="radio"
                  className={`${styles.radio}`}
                  onChange={(e) =>
                    setFormUser({ ...formUser, setuju: e.target.checked })
                  }
                />
                <label htmlFor="radio" className={`${styles.sk}`}>
                  Dengan ini saya telah menyetujui
                  <span
                    className="text-purple mx-2"
                    onClick={() => setIsOpen(true)}
                  >
                    Syarat dan Ketentuan
                  </span>
                  yang berlaku
                </label>
              </div>
              {errorSetuju && (
                <p className="mt-2 ml-8 text-red">{errorSetuju}</p>
              )}
            </div>

            <input
              type="submit"
              value="Daftar Sekarang"
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
  const { id_vaksin } = context.query;
  const baseUrl = process.env.BASE_URL;
  const lokasiVaksinasi = await fetch(`${baseUrl}api/lokasi-vaksinasi`);

  const resultKetiga = await lokasiVaksinasi.json();
  const data = resultKetiga.data.filter((item) => item._id === id_vaksin);

  const session = await getSession({ req: context.req });
  const email = session.user.email;
  const response = await fetch(`${baseUrl}api/detail-profile/${email}`);
  const result = await response.json();

  return {
    props: {
      data,
      user: result.data,
    },
  };
}
