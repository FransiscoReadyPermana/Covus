import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../daftar.module.css";
import Title from "../../../Components/title";
import Footer from "../../../Components/footer";
import DropDownEdit from "../../../Components/dropDown";
import Button from "../../../Components/button";

export default function Admin() {
  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`${styles.section1} w-full relative mb-20`}
      >
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className="w-full flex flex-col items-center h-full px-64 pt-72 bg-white pb-16"
        >
          <Title color="dark-grey">DAFTAR VAKSINASI</Title>

          <div className="flex items-center justify-center w-full mt-8">
            <DropDownEdit
              className="w-1/2"
              color="purple"
              placeholder={"Pilih Provinsi"}
            />
          </div>

          <div
            id="containerCard"
            className="w-full h-full flex flex-row justify-center gap-12 mt-12 justify-center"
          >
            {/* comment */}
            <div
              id="card"
              className={`relative bg-dark-grey w-80 h-full gap-8 items-center flex flex-col ${styles.card} mb-8`}
            >
              <div
                id="image"
                className={`bg-white w-full flex flex-col ${styles.cardImage}`}
              >
                <Image
                  src="https://media.discordapp.net/attachments/900386011585069106/908233952223957002/Rs_UI.jpg"
                  alt="reading-book-image"
                  layout="fill"
                  className={`${styles.cardImage}`}
                />
              </div>

              <div
                id="card"
                className={`absolute bg-white w-full h-96 bottom-0 ${styles.card2} flex flex-col`}
              >
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-m text-white mt-7 text-dark-grey"
                >
                  jenis vaksin
                </p>

                <p
                  color="dark-grey"
                  className={`text-center font-light text-xl text-white text-dark-grey ${styles.nama}`}
                >
                  nama
                </p>

                <div
                  id="containerLogo"
                  className={`flex flex-row justify-center items-center ${styles.calenderContainer}`}
                >
                  <div
                    id="logo"
                    className={
                      "relative flex flex-row h-8 w-8 items-center justify-center top-0"
                    }
                  >
                    <Image
                      src="/images/Calendar.svg"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-l text-white text-dark-grey w-full ml-4"
                  >
                    tanggal
                  </p>
                </div>

                <div
                  id="containerLogo"
                  className={`flex flex-row justify-center items-center ${styles.timeContainer}`}
                >
                  <div
                    id="logo"
                    className={
                      "relative flex flex-row h-8 w-8 items-center justify-center top-0"
                    }
                  >
                    <Image
                      src="/images/Time.svg"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-l text-white text-dark-grey w-full ml-4"
                  >
                    waktu
                  </p>
                </div>

                <div
                  id="containerLogo"
                  className={`flex flex-row justify-center mt-2 items-start mx-10 content-start ${styles.locationContainer}`}
                >
                  <div
                    id="logo"
                    className={
                      "relative h-8 w-8 items-center justify-center top-0 content-start"
                    }
                  >
                    <Image
                      src="/images/Location.svg"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-l text-white text-dark-grey w-full ml-4"
                  >
                    lokasi1
                  </p>
                </div>

                <div className={"flex flex-col items-center mt-5"}>
                  <p
                    color="dark-grey"
                    className={`text-center font-semibold text-l text-white text-dark-grey w-full ${styles.lokasi2}`}
                  >
                    lokasi2
                  </p>

                  <div
                    className={`flex items-center pb-24 flex-row justify-center w-5/6 ${styles.buttonContainer}`}
                  >
                    <Button to={`/`} color="purple">
                      Ubah Data
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* comment */}
            <div
              id="card"
              className={`relative bg-dark-grey w-80 h-full gap-8 items-center flex flex-col ${styles.card} mb-8`}
            >
              <div
                id="image"
                className={`bg-white w-full flex flex-col ${styles.cardImage}`}
              >
                <Image
                  src="https://media.discordapp.net/attachments/900386011585069106/908233952223957002/Rs_UI.jpg"
                  alt="reading-book-image"
                  layout="fill"
                  className={`${styles.cardImage}`}
                />
              </div>

              <div
                id="card"
                className={`absolute bg-white w-full h-96 bottom-0 ${styles.card2} flex flex-col`}
              >
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-m text-white mt-7 text-dark-grey"
                >
                  jenis vaksin
                </p>

                <p
                  color="dark-grey"
                  className={`text-center font-light text-xl text-white text-dark-grey ${styles.nama}`}
                >
                  nama
                </p>

                <div
                  id="containerLogo"
                  className={`flex flex-row justify-center items-center ${styles.calenderContainer}`}
                >
                  <div
                    id="logo"
                    className={
                      "relative flex flex-row h-8 w-8 items-center justify-center top-0"
                    }
                  >
                    <Image
                      src="/images/Calendar.svg"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-l text-white text-dark-grey w-full ml-4"
                  >
                    tanggal
                  </p>
                </div>

                <div
                  id="containerLogo"
                  className={`flex flex-row justify-center items-center ${styles.timeContainer}`}
                >
                  <div
                    id="logo"
                    className={
                      "relative flex flex-row h-8 w-8 items-center justify-center top-0"
                    }
                  >
                    <Image
                      src="/images/Time.svg"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-l text-white text-dark-grey w-full ml-4"
                  >
                    waktu
                  </p>
                </div>

                <div
                  id="containerLogo"
                  className={`flex flex-row justify-center mt-2 items-start mx-10 content-start ${styles.locationContainer}`}
                >
                  <div
                    id="logo"
                    className={
                      "relative h-8 w-8 items-center justify-center top-0 content-start"
                    }
                  >
                    <Image
                      src="/images/Location.svg"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                  <p
                    color="dark-grey"
                    className="text-left font-semibold text-l text-white text-dark-grey w-full ml-4"
                  >
                    lokasi1
                  </p>
                </div>

                <div className={"flex flex-col items-center mt-5"}>
                  <p
                    color="dark-grey"
                    className={`text-center font-semibold text-l text-white text-dark-grey w-full ${styles.lokasi2}`}
                  >
                    lokasi2
                  </p>

                  <div
                    className={`flex items-center pb-24 flex-row justify-center w-5/6 ${styles.buttonContainer}`}
                  >
                    <Button to={`/`} color="purple">
                      Ubah Data
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* comment */}
          </div>
          <button
            className={`bg-purple text-white py-3 rounded-3xl w-3/4 mt-24 ${styles.buttonTambah}`}
          >
            Tambah Data
          </button>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
