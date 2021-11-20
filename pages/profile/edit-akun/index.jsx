import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import uuid from "react-uuid";
import styles from "../edit.module.css";
import Footer from "../../../Components/footer";
import Button from "../../../Components/button";

export default function EditAkun({ data }) {
  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`${styles.section1} w-full h-full relative bg-purple pb-8 flex flex-col items-center justify-center`}
      >
        <div
          id="container"
          className={`h-full w-3/4 flex flex-row content-between justify-between gap-24 mt-40 ${styles.container_konten}`}
        >
          <div
            id="kiri"
            className={`bg-white w-1/3 h-full flex flex-col items-start px-12 ${styles.container}`}
          >
            <p
              color="dark-grey"
              className="text-center font-semibold text-2xl text-dark-grey mt-12"
            >
              Raihan Kemmy Rachmansyah
            </p>

            <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

            <div
              id="akun"
              className={`flex flex-row pl-6 py-3 w-full ${styles.container_icon}`}
            >
              <div
                id="icon"
                className={"relative h-7 w-7 flex items-center justify-center"}
              >
                <Image
                  src="/images/profile.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl text-dark-grey flex items-center ml-4"
              >
                Akun Saya
              </p>
            </div>

            <div
              id="edit-akun"
              className={`flex flex-row pl-6 py-3 w-full mt-2 ${styles.active}`}
            >
              <div
                id="icon"
                className={"relative h-7 w-7 flex items-center justify-center"}
              >
                <Image
                  src="/images/Edit_Active.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl text-white flex items-center ml-4"
              >
                Edit Akun
              </p>
            </div>

            <div
              id="riwayat-vaksin"
              className={`flex flex-row pl-6 py-3 w-full mt-2 ${styles.container_icon}`}
            >
              <div
                id="icon"
                className={"relative h-7 w-7 flex items-center justify-center"}
              >
                <Image
                  src="/images/Riwayat.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl flex items-center ml-4 text-dark-grey"
              >
                Vaksinasi
              </p>
            </div>

            <button
              className={`w-full rounded-full py-3 text-xl text-white bg-purple mt-80 mb-12 ${styles.button}`}
            >
              Keluar
            </button>
          </div>

          <div
            id="kanan"
            className={`bg-white w-full h-full flex flex-col items-start px-12 pb-12 ${styles.container_kanan}`}
          >
            <p
              color="dark-grey"
              className="text-center font-semibold text-2xl text-dark-grey mt-12"
            >
              Akun Saya
            </p>

            <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

            <div id="nama" className="flex flex-col">
              <p
                color="dark-grey"
                className="text-left font-semibold text-l flex items-center text-dark-grey"
              >
                Nama Lengkap
              </p>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey"
              >
                Raihan Kemmy Rachmansyah
              </p>
            </div>

            <div id="email" className="flex flex-col mt-6">
              <p
                color="dark-grey"
                className="text-left font-semibold text-l flex items-center text-dark-grey"
              >
                Email
              </p>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey"
              >
                raikemmy@upnvj.ac.id
              </p>
            </div>

            <div id="tanggal-lahir" className="flex flex-col mt-6">
              <p
                color="dark-grey"
                className="text-left font-semibold text-l flex items-center text-dark-grey"
              >
                Tanggal Lahir
              </p>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey"
              >
                05 Januari 2001
              </p>
            </div>

            <div id="jenis-kelamin" className="flex flex-col mt-6">
              <p
                color="dark-grey"
                className="text-left font-semibold text-l flex items-center text-dark-grey"
              >
                Jenis Kelamin
              </p>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey"
              >
                Laki-Laki
              </p>
            </div>

            <div id="alamat" className="flex flex-col mt-6">
              <p
                color="dark-grey"
                className="text-left font-semibold text-l flex items-center text-dark-grey"
              >
                Alamat
              </p>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey text-justify"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus sed vitae maxime illum, repellendus quo qui numquam
                in a, et sapiente cumque eum. Quaerat, nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer color="white" />
    </div>
  );
}
