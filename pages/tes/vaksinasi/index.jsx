import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../daftar.module.css";
import Title from "../../../Components/title";
import Footer from "../../../Components/footer";
import DropDownEdit from "../../../Components/dropDown";
import Button from "../../../Components/button";
import CardVaksin2 from "../../../Components/cardVaksin/cardVaksin2";

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
          className="w-full flex flex-col items-center h-full pt-72 bg-white pb-16"
        >
          <Title color="dark-grey">DAFTAR VAKSINASI</Title>

          <div className="flex items-center justify-center w-full mt-4">
            <DropDownEdit
              className="w-1/3"
              color="purple"
              placeholder={"Pilih Provinsi"}
            />
          </div>

          <div
            id="containerCard"
            className="w-full h-full flex flex-row justify-center gap-12 mt-16 justify-center"
          >
            <CardVaksin2 />
            <CardVaksin2 />
            <CardVaksin2 />
            <CardVaksin2 />
       
          </div>
          <button
            className={`absolute bg-purple text-white py-3 rounded-3xl w-72 mt-24 right-0 top-0 mt-56 mr-20 ${styles.buttonTambah}`}
          >
            Tambah Data
          </button>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
