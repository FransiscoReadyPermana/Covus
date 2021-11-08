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
