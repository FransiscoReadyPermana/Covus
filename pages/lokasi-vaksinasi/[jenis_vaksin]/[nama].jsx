import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../lokasi.module.css";
import Title from "../../../Components/title";
import Paragraph from "../../../Components/paragraph";
import Footer from "../../../Components/footer";
import Link from "next/link";
import uuid from "react-uuid";
import Pagination from "../../../Components/pagination";
import DropDownEdit from "../../../Components/dropDown";
import { useRouter } from "next/router";
import jenisVaksinasi from "./jenisVaksin";

export default function LokasiVaksinasi({
  data,
  dataVaksin,
  nama,
  jenis_vaksin,
}) {
  const router = useRouter();
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(
    data.filter((namaData) => namaData.provinsi === nama)
  );
  const [dataDropdown, setDataDropdown] = useState(nama);

  let firstPageIndex = 0;
  let lastPageIndex = 0;
  const PageSize = 4;

  useEffect(() => {
    firstPageIndex = (currentPage - 1) * PageSize;
    lastPageIndex = firstPageIndex + PageSize;
    setCurrentData(filteredData.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, filteredData]);
  console.log(currentData);

  const onFilterDropdown = (e) => {
    setDataDropdown(e);
    let filterData = null;

    if (e.length > 0) {
      filterData = data.filter((dataBaru) => dataBaru.provinsi === e);
    } else {
      filterData = data;
      setDataDropdown(nama);
    }
    setFilteredData(filterData);
    router.replace(`/lokasi-vaksinasi/${jenis_vaksin}/${e}`);
  };

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
              <DropDownEdit
                className="w-3/4"
                color="white"
                placeholder={nama}
                option={dataVaksin}
                onChange={onFilterDropdown}
              />
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
          <Title color="dark-grey" id="judulVaksin" className="uppercase">
            PILIH JADWAL DAN TEMPAT VAKSINASI DI {dataDropdown}
          </Title>

          <div
            id="containerCard"
            className="w-full h-full flex justify-center gap-12 mt-12 justify-center"
          >
            {currentData.map((item) => (
              <div
                id="card"
                className={`relative bg-dark-grey w-80 h-full gap-8 items-center flex flex-col ${styles.card} mb-8`}
                key={uuid()}
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
                    className={
                      "flex flex-row justify-center mt-5 items-center ml-10"
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
                      {item.tanggal}
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
                        src="/images/Location.svg"
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

                    <div className="flex gap-12 items-center mb-10 flex-row justify-center w-full">
                      <DropDownEdit
                        className="w-3/4 text"
                        color="purple"
                        placeholder={"Jenis Vaksin"}
                        option={jenisVaksinasi}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="pagination" className="flex bg-white pb-20 justify-center">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
        <div id="pagination" className="mt-12">
          <Footer color="purple" />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { nama, jenis_vaksin } = ctx.query;
  const lokasiVaksinasi = await fetch(
    "http://localhost:3000/api/lokasi-vaksinasi"
  );
  const vaksinasiPertama = await fetch(
    "http://localhost:3000/api/vaksinasi-provinsi"
  );
  const vaksinasiKedua = await fetch(
    "http://localhost:3000/api/vaksinasi-provinsi-kedua"
  );
  const resultPertama = await vaksinasiPertama.json();
  const resultKedua = await vaksinasiKedua.json();
  const resultKetiga = await lokasiVaksinasi.json();

  const data = resultKetiga.data.filter(
    (item) => item.jenisVaksin === jenis_vaksin
  );

  let namaVaksin = [];
  if (jenis_vaksin === "Vaksinasi Pertama") {
    namaVaksin = resultPertama.data.map((item) => item.nama);
  } else if (jenis_vaksin === "Vaksinasi Kedua") {
    namaVaksin = resultKedua.data.map((item) => item.nama);
  }
  return {
    props: {
      data,
      dataVaksin: namaVaksin,
      nama,
      jenis_vaksin,
    },
  };
}
