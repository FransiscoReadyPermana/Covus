import React, { useState } from "react";
import styles from "../hasilvaksin.module.css";
import Image from "next/image";
import PopUpPenyakit from "../../../Components/pop-up/pop-up-penyakit";

export default function CardHasilVaksin({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="container-konten"
      className={`flex flex-col items-center bg-white w-full pb-10 pt-6 ${styles.konten}`}
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
          {item.jenisVaksin}
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
            {item.nama}
          </p>

          <p
            color="dark-grey"
            className="text-left font-light text-l text-dark-grey mt-2"
          >
            {item.lokasi2}
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
              {item.tanggal}
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
              {item.waktu}
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
              {item.lokasi1}
            </p>
          </div>
        </div>
      </div>

      <PopUpPenyakit
        open={isOpen}
        onClickBackground={() => setIsOpen(false)}
        onClick={() => setIsOpen(false)}
        item={item}
      />

      <button onClick={() => setIsOpen(true)}>
        <div
          className={`absolute w-10 h-10 ${styles.penyakit} bg-purple flex flex-col items-center justify-center rounded-full`}
        >
          <div className={`absolute w-6 h-6 flex`}>
            <Image src="/images/Riwayat_Active.svg" alt="" layout="fill" />
          </div>
        </div>
      </button>
    </div>
  );
}
