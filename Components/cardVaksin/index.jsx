import React, { useState } from "react";
import DropDownEdit from "../dropDown";
import styles from "./cardVaksin.module.css";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";
import uuid from "react-uuid";

export default function CardVaksin({ item }) {
  const [vaksinValue, setVaksinValue] = useState("");

  const onDropdownDataNamaVaksin = (e) => {
    let dataNamaVaksin = e;
    setVaksinValue(dataNamaVaksin);
    console.log(dataNamaVaksin);
  };

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
          src={item.img}
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
          {item.jenisVaksin}
        </p>

        <p
          color="dark-grey"
          className="text-center font-light text-xl text-white mt-3 text-dark-grey"
        >
          {item.nama}
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
            {item.tanggal}
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
            {item.waktu}
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
            {item.lokasi1}
          </p>
        </div>

        <div className={"flex flex-col items-center mt-5"}>
          <p
            color="dark-grey"
            className="text-center font-semibold text-l text-white text-dark-grey w-full mb-5"
          >
            {item.lokasi2}
          </p>

          <div className="flex items-center pb-24 flex-row justify-center w-5/6">
            <Link href={`/vaksinasi/validasi-vaksinasi/${item._id}`} passHref key={uuid()}>
              <Button to="#" color="purple">
                Pilih
              </Button>
            </Link>
            {/* <DropDownEdit
              className="w-3/4 text"
              color="purple"
              placeholder={'Jenis Vaksin'}
              option={item.namaVaksin}
              value={vaksinValue}
              onChange={(e) => {
                onDropdownDataNamaVaksin(e);
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
