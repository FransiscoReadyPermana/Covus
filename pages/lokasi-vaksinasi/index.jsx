import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./lokasi.module.css";
import Title from "../../Components/title";
import Paragraph from "../../Components/paragraph";
import Button from "../../Components/button";
import Footer from "../../Components/footer";
import Card from "../../Components/card";
import Link from "next/link";
import uuid from "react-uuid";
import Pagination from "../../Components/pagination";
import DropDownEdit from "../../Components/dropDown";

export default function LokasiVaksinasi({ data }) {
  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`flex flex-col items-center w-full ${styles.section1} bg-purple relative`}
      >
        <div
          id="content"
          className="flex flex-col gap-16 h-full bg-purple items-center mt-28"
        >
          <div id="text" className="flex flex-col items-center w-full mt-8">
            <Title color="white" className="mb-4">
              MARI KITA VAKSINASI COVID-19
            </Title>

            <Paragraph size="2xl" color="white" className="text-center">
              Daftar Sekarang dan cari tahu informasi seputar Vaksinasi Covid-19
              disini
            </Paragraph>

            <div className="flex gap-12 items-center mb-10 flex-row justify-center w-full mt-12">
              <DropDownEdit className="w-3/4" color="white" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="second"
        className={`${styles.section2} w-full relative bg-white`}
      >
        <div id="divider" className={`${styles.bgFirstSection} h-52 w-full`} />

        <div
          id="contentCard"
          className="flex flex-col w-full h-full px-52 bg-white pt-8 items-center"
        >
          <Title color="dark-grey" id="judulVaksin">
            PILIH JADWAL DAN TEMPAT VAKSINASI DI {null}
          </Title>
          <div
            id="containerCard"
            className="w-full h-full flex justify-center gap-12 mt-12 justify-center mb-24"
          >
            <div
              id="card"
              className={`relative bg-dark-grey w-1/4 h-full gap-8 items-center flex flex-col ${styles.card} mb-8`}
            >
              <div
                id="card"
                className={`absolute bg-white w-full h-80 bottom-0 ${styles.card} flex flex-col`}
              >
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-m text-white mt-4 text-dark-grey"
                >
                  Vaksinasi Pertama
                </p>

                <p
                  color="dark-grey"
                  className="text-center font-light text-xl text-white mt-4 text-dark-grey"
                >
                  NAMA PENYELENGGARA
                </p>

                <div
                  id="containerLogo"
                  className={
                    "flex flex-row justify-center mt-4 items-center ml-10"
                  }
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
                    01 Aug - 30 Oct 2021
                  </p>
                </div>

                <div
                  id="containerLogo"
                  className={
                    "flex flex-row justify-center mt-2 items-center ml-10"
                  }
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
                    07:00 - 15:00 WIB
                  </p>
                </div>

                <div
                  id="containerLogo"
                  className={
                    "flex flex-row justify-center mt-2 items-center mx-10"
                  }
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
                    Rumah Sakit Universitas Indonesia
                    <br/> <br/>
                    Depok, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const lokasiVaksinasi = await fetch(
    "http://localhost:3000/api/lokasi-vaksinasi"
  );
  const resultPertama = await lokasiVaksinasi.json();
  return {
    props: {
      data: resultPertama.data,
    },
  };
}
