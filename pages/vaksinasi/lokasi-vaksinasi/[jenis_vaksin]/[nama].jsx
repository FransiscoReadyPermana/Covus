import React, { useEffect, useState } from "react";
import styles from "../../../../styles/lokasi.module.css";
import Title from "../../../../Components/title";
import Paragraph from "../../../../Components/paragraph";
import Footer from "../../../../Components/footer";
import uuid from "react-uuid";
import Pagination from "../../../../Components/pagination";
import DropDownEdit from "../../../../Components/dropDown";
import { useRouter } from "next/router";
import CardVaksin from "../../../../Components/cardVaksin";
import PopUpSK from "../../../../Components/pop-up/pop-up-SK";
import Image from "next/image";

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
    data.filter((namaData) => namaData.vaksinId.nama === nama)
  );
  const [dataDropdown, setDataDropdown] = useState(nama);
  const [isOpen, setIsOpen] = useState(false);
  const PageSize = 4;

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setCurrentData(filteredData.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, filteredData]);

  const onFilterDropdown = (e) => {
    setDataDropdown(e);
    let filterData = null;

    if (e.length > 0) {
      filterData = data.filter((dataBaru) => dataBaru.vaksinId.nama === e);
    } else {
      filterData = data;
      setDataDropdown(nama);
    }
    setFilteredData(filterData);
    router.replace(`/vaksinasi/lokasi-vaksinasi/${jenis_vaksin}/${e}`);
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
          className="flex flex-col w-full h-full bg-white pt-8 items-center"
        >
          <Title color="dark-grey" id="judulVaksin" className="uppercase">
            PILIH JADWAL DAN TEMPAT VAKSINASI DI {dataDropdown}
          </Title>

          <div
            id="containerCard"
            className="w-full h-full flex justify-center gap-12 mt-12 justify-center"
          >
            {currentData.map((item) => (
              <CardVaksin key={uuid()} item={item} />
            ))}
          </div>
        </div>

        <div
          id="pagination"
          className="flex bg-white pb-20 mt-4 justify-center items-center"
        >
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
        <div id="pagination" className="mt-4">
          <PopUpSK
            open={isOpen}
            onClickBackground={() => setIsOpen(false)}
            onClick={() => setIsOpen(false)}
          />

          <div
            className={`fixed w-8 h-8 bottom-10 right-0 p-6 mt-8 mr-16 ${styles.chevronUp} z-20`}
            onClick={() => setIsOpen(true)}
          >
            <div
              className={`absolute w-10 h-10 top-0 left-0 flex ${styles.imgChevron}`}
            >
              <Image src="/images/Help.svg" alt="" layout="fill" />
            </div>
          </div>
          <Footer color="purple" />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { nama, jenis_vaksin } = ctx.query;
  const baseUrl = process.env.BASE_URL;
  const lokasiVaksinasi = await fetch(`${baseUrl}api/lokasi-vaksinasi`);
  const vaksinasiPertama = await fetch(`${baseUrl}api/vaksinasi-provinsi`);
  const vaksinasiKedua = await fetch(`${baseUrl}api/vaksinasi-provinsi-kedua`);
  const resultPertama = await vaksinasiPertama.json();
  const resultKedua = await vaksinasiKedua.json();
  const resultKetiga = await lokasiVaksinasi.json();

  const data = resultKetiga.data.filter(
    (item) => item.jenisVaksin === jenis_vaksin
  );

  let namaVaksin = [];
  if (jenis_vaksin === "Vaksinasi Pertama") {
    namaVaksin = data.map((item) => item.vaksinId.nama);
  } else if (jenis_vaksin === "Vaksinasi Kedua") {
    namaVaksin = data.map((item) => item.vaksinId.nama);
  }

  const namaVaksinUnik = [...new Set(namaVaksin)];

  return {
    props: {
      data,
      dataVaksin: namaVaksinUnik,
      nama,
      jenis_vaksin,
    },
  };
}
