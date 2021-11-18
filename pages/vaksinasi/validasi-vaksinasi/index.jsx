import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "../../../Components/footer";
import Title from "../../../Components/title";
import styles from "../validasi.module.css";

export default function Vaksinasi() {
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
              className={`flex flex-col items-center bg-white w-1/2 mt-4 pb-10 pt-10 ${styles.container_konten}`}
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
                    className="text-left font-light text-l text-dark-grey mt-4"
                  >
                    Rumah Sakit Universitas Indonesia
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
                      11 November 2021
                    </p>
                  </div>

                  <div id="waktu" className="flex flex-row">
                    <div id="icon" className={"absolute h-6 w-6 mr-2 mt-2"}>
                      <Image
                        src="/images/Calendar.svg"
                        alt="reading-book-image"
                        layout="fill"
                      />
                    </div>

                    <p
                      color="dark-grey"
                      className="text-left font-light text-l text-dark-grey mt-2 ml-8"
                    >
                      11 November 2021
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
                        src="/images/Calendar.svg"
                        alt="reading-book-image"
                        layout="fill"
                      />
                    </div>

                    <p
                      color="dark-grey"
                      className="text-left font-light text-l text-dark-grey mt-4 ml-8"
                    >
                      Lokasi Vaksinasi Lokasi Vaksinasi
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
        className={`${styles.section2} w-full h-full relative`}
      >
        <div
          id="divider"
          className={`${styles.dividerKetiga} h-10  w-full absolute`}
        />
      </section>
      <Footer color="purple" />
    </div>
  );
}
