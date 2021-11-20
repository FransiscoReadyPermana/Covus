import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import uuid from "react-uuid";
import styles from "./styles.module.css";
import Footer from "../../Components/footer";

export default function ValidasiVaksinasi({ data }) {
  function hovering() {
    console.log("aaaa");
  }
  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`${styles.section1} w-full h-full relative bg-purple pb-8 flex flex-col items-center justify-center`}
      >
        <div
          id="container"
          className={`h-full w-3/4 flex flex-row content-between justify-between gap-24 mt-40`}
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
              className={`flex flex-row pl-6 py-2 w-full ${styles.container_icon}`}
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
                className="text-left font-normal text-xl flex items-center ml-4"
              >
                Akun Saya
              </p>
            </div>

            <div
              id="edit-akun"
              className={`flex flex-row pl-6 py-2 w-full mt-4 ${styles.container_icon}`}
            >
              <div
                id="icon"
                className={"relative h-7 w-7 flex items-center justify-center"}
              >
                <Image
                  src="/images/Edit.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>

              <p
                color="dark-grey"
                className="text-left font-normal text-xl flex items-center ml-4"
              >
                Edit Akun
              </p>
            </div>

            <div
              id="riwayat-vaksin"
              className={`flex flex-row pl-6 py-2 w-full mt-4 ${styles.container_icon}`}
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
                className="text-left font-normal text-xl flex items-center ml-4"
              >
                Vaksinasi
              </p>
            </div>
          </div>

          <div
            id="kanan"
            className={`bg-white w-full h-full flex flex-col items-center justify-center ${styles.container}`}
          >
            {" "}
          </div>
        </div>
      </section>
      <Footer color="white" />
    </div>
  );
}
