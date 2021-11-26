import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Components/footer';
import Title from '../../../Components/title';
import styles from '../../../styles/validasi.module.css';
import Link from 'next/link';
import uuid from 'react-uuid';
import PopUpSK from '../../../Components/pop-up/pop-up-SK';

export default function ValidasiVaksinasi({ data }) {
  const [isOpen, setIsOpen] = useState(false);
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
                    <div id="icon" className={'absolute h-6 w-6 mr-2 mt-4'}>
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
                    <div id="icon" className={'absolute h-6 w-6 mr-2 mt-2'}>
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
                    <div id="icon" className={'absolute h-6 w-6 mr-2 mt-4'}>
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
                    key={uuid}
                  >
                    <input
                      type="radio"
                      id={item}
                      name="jenis-vaksin"
                      value={item}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </div>
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
                    value="riwayat-satu"
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
                    value="riwayat-dua"
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
                    value="riwayat-tiga"
                    className="absolute h-4"
                  />

                  <label htmlFor="riwayat-tiga" className="pl-5">
                    Kontak erat dengan keluarga Serumah / Suspek / Konfirmasi /
                    Sedang dalam perawatan penyakit COVID-19
                  </label>
                </div>

                <div id="jenis-empat" className="flex items-center">
                  <input
                    type="checkbox"
                    id="riwayat-empat"
                    name="penyakit-vaksin"
                    value="riwayat-empat"
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
                    value="riwayat-lima"
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
                    value="riwayat-enam"
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
                    value="riwayat-tujuh"
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

            <div id="sk" className="flex items-center mt-4">
              <input type="checkbox" id="radio" className={`${styles.radio}`} />
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

            <input
              type="submit"
              value="Daftar Sekarang"
              className="bg-purple text-white py-3 rounded-3xl mt-4"
            />
          </form>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { id_vaksin } = ctx.query;
  const baseUrl = process.env.BASE_URL;
  const lokasiVaksinasi = await fetch(`${baseUrl}api/lokasi-vaksinasi`);

  const resultKetiga = await lokasiVaksinasi.json();
  const data = resultKetiga.data.filter((item) => item._id === id_vaksin);
  return {
    props: {
      data,
    },
  };
}
