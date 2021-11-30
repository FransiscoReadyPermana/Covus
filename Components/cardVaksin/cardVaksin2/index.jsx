import React, { useState } from "react";
import styles from "../cardVaksin.module.css";
import Image from "next/image";
import Button from "../../button";

export default function CardVaksin2() {
  return (
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
        className={`absolute bg-white w-full bottom-0 ${styles.cardKedua} flex flex-col`}
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
            className={`flex items-center pb-6 flex-row justify-center w-5/6 items-center ${styles.buttonContainer}`}
          >
            <Button to={`/`} color="purple">
              Peserta Vaksin
            </Button>
          </div>

          <div
            className={`flex items-center pb-24 flex-row justify-center w-5/6 gap-12 items-center ${styles.buttonContainer}`}
          >
            <Button to={`/`} color="secondary">
              Ubah Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
