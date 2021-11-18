<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import styles from "../lokasi.module.css";
import React, { useEffect, useState } from 'react';
import styles from '../lokasi.module.css';
import Title from '../../../Components/title';
import Paragraph from '../../../Components/paragraph';
import Footer from '../../../Components/footer';
import Link from 'next/link';
import uuid from 'react-uuid';
import Pagination from '../../../Components/pagination';
import DropDownEdit from '../../../Components/dropDown';
import { useRouter } from 'next/router';
import CardVaksin from '../../../Components/cardVaksin';
import Button from '../../../Components/button';

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
      filterData = data.filter((dataBaru) => dataBaru.provinsi === e);
    } else {
      filterData = data;
      setDataDropdown(nama);
    }
    setFilteredData(filterData);
    router.replace(`/lokasi-vaksinasi/${jenis_vaksin}/${e}`);
  };

  function selanjutnyaHandler() {
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      nama:{},

    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('localhost:3000/api/reservasi-vaksinasi', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

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
              <CardVaksin key={uuid()} item={item} />
            ))}
          </div>
        </div>

        <div
          id="pagination"
          className="flex bg-white pb-20 mt-4 justify-center flex-col items-center"
        >
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />

          <Button to="#" color="purple" className="mt-12">
            Selanjutnya
          </Button>
        </div>
        <div id="pagination" className="mt-4">
          <Footer color="purple" />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { nama, jenis_vaksin } = ctx.query;
  const lokasiVaksinasi = await fetch(
    'http://localhost:3000/api/lokasi-vaksinasi'
  );
  const vaksinasiPertama = await fetch(
    'http://localhost:3000/api/vaksinasi-provinsi'
  );
  const vaksinasiKedua = await fetch(
    'http://localhost:3000/api/vaksinasi-provinsi-kedua'
  );
  const resultPertama = await vaksinasiPertama.json();
  const resultKedua = await vaksinasiKedua.json();
  const resultKetiga = await lokasiVaksinasi.json();

  const data = resultKetiga.data.filter(
    (item) => item.jenisVaksin === jenis_vaksin
  );

  let namaVaksin = [];
  if (jenis_vaksin === 'Vaksinasi Pertama') {
    namaVaksin = resultPertama.data.map((item) => item.nama);
  } else if (jenis_vaksin === 'Vaksinasi Kedua') {
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
