import React from "react";
import Image from "next/image";
import Title from "../../../../Components/title";
import Paragraph from "../../../../Components/paragraph";
import styles from "../../../../styles/pesertaVaksin.module.css";
import Card from "../../../../Components/card";
import Footer from "../../../../Components/footer";
import TableData from "../../../../Components/table";

export default function RSRujukan({ data }) {
  return (
    <div className="pt-20">
      {/* second section */}

      <section id="second" className={`w-full relative bg-purple mt-32 mb-24`}>
        <div
          id="divider"
          className={`${styles.bgThirdSection} h-52 w-full absolute -top-32`}
        />
        <div
          id="content"
          className="flex flex-col gap-16 h-full px-24 pt-24 bg-white"
        >
          <Title className="text-center" color="dark-grey">
            DAFTAR PESERTA VAKSIN
          </Title>
          <TableData data={data} type="peserta-vaksinasi" />
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL;
  const reservasi = await fetch(`${baseUrl}api/reservasi-vaksinasi`);
  const result = await reservasi.json();

  return {
    props: {
      data: result.data,
    },
  };
}
