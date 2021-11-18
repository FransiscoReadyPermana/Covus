import React, { useState, ne } from "react";
import DropDownEdit from "../dropDown";
import styles from "./cardVaksin.module.css";
import Image from "next/image";

export default function CardVaksin({
  img,
  lokasi1,
  waktu,
  nama,
  lokasi2,
  tanggal,
  namaVaksin,
  jenisVaksin,
  value,
  onChange,
}) {

  return (
    <div
      id="card"
      className={`relative bg-dark-grey w-80 h-full gap-8 items-center flex flex-col ${styles.card} mb-8`}
    >
      <div
        id="image"
        className={`absolute bg-white w-full h-3/5 flex flex-col ${styles.cardImage}`}
      >
        <Image
          src={img}
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
          {jenisVaksin}
        </p>

        <p
          color="dark-grey"
          className="text-center font-light text-xl text-white mt-3 text-dark-grey"
        >
          {nama}
        </p>

        <div
          id="containerLogo"
          className={"flex flex-row justify-center mt-5 items-center ml-10"}
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
            {tanggal}
          </p>
        </div>

        <div
          id="containerLogo"
          className={"flex flex-row justify-center mt-2 items-center ml-10"}
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
            {waktu}
          </p>
        </div>

        <div
          id="containerLogo"
          className={
            "flex flex-row justify-center mt-2 items-start mx-10 content-start"
          }
        >
          <div
            id="logo"
            className={
              "relative h-8 w-8 items-center justify-center top-0 content-start"
            }
          >
            <Image
              src="/images/location.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
          <p
            color="dark-grey"
            className="text-left font-semibold text-l text-white text-dark-grey w-full ml-4"
          >
            {lokasi1}
          </p>
        </div>

        <div className={"flex flex-col items-center mt-5"}>
          <p
            color="dark-grey"
            className="text-center font-semibold text-l text-white text-dark-grey w-full mb-5"
          >
            {lokasi2}
          </p>

          <div className="flex gap-12 items-center mb-10 flex-row justify-center w-full">
            <DropDownEdit
              className="w-3/4 text"
              color="purple"
              placeholder={"Jenis Vaksin"}
              option={namaVaksin}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
