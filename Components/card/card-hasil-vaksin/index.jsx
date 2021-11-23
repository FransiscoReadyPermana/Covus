import React from "react";
import styles from "../hasilvaksin.module.css";
import Image from "next/image";

export default function CardHasilVaksin() {
  return (
    <div
      id="container-konten"
      className={`flex flex-col items-center bg-white w-full pb-10 pt-6 ${styles.konten}`}
    >
      <p
        className={`absolute text-center font-medium text-s text-white px-10 py-2 rounded-full left-1/3 transform -rotate-45 ml-12 ${styles.jenis_vaksin}`}
      >
        Astrazeneca
      </p>

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
          Vaksinasi Pertama
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
            Nama
          </p>

          <p
            color="dark-grey"
            className="text-left font-light text-l text-dark-grey mt-2"
          >
            Lokasi2
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
              Tanggal
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
              Waktu
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
                src="/images/location.svg"
                alt="reading-book-image"
                layout="fill"
              />
            </div>

            <p
              color="dark-grey"
              className="text-left font-light text-l text-dark-grey mt-4 ml-8"
            >
              Lokasi1
            </p>
          </div>
        </div>
      </div>

      <div
        className={`absolute w-10 h-10 ${styles.penyakit} bg-purple flex flex-col items-center justify-center rounded-full mt-44 left-3/4`}
      >
        <div className={`absolute w-6 h-6 flex`}>
          <Image src="/images/Riwayat_Active.svg" alt="" layout="fill" />
        </div>
      </div>
    </div>
  );
}
