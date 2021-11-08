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

export default function Vaksinasi({ data, dataKedua }) {
  return (
    <div className="h-screen w-full">
      <section id="fifth" className={`${styles.section5} w-full relative`}>
        <div
          id="divider"
          className={`${styles.bgFourthSection} h-52 w-full absolute top-0`}
        />

        <div
          id="content"
          className="flex h-full pr-48 pl-0 pt-32 bg-white"
        ></div>
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
