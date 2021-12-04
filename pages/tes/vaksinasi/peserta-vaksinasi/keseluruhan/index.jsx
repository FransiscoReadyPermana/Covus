import React from "react";
import Title from "../../../../../Components/title";
import styles from "../../../../../styles/pesertaVaksin.module.css";
import Footer from "../../../../../Components/footer";
import TableData from "../../../../../Components/table";

export default function RSRujukan({ data }) {
  return (
    <div className="h-screen w-full">
      <section id="first" className={`w-full relative h-full mb-32`}>
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className="flex flex-col gap-16 h-full px-24 pt-80 bg-white"
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

export async function getServerSideProps(context) {
  const { id } = context.query;
  const baseUrl = process.env.BASE_URL;
  const reservasi = await fetch(`${baseUrl}api/reservasi-vaksinasi`);
  const result = await reservasi.json();

  return {
    props: {
      data: result.data,
    },
  };
}
