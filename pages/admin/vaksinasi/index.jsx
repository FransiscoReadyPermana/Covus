import React, { useEffect, useState } from "react";
import styles from "../daftar.module.css";
import Title from "../../../Components/title";
import Footer from "../../../Components/footer";
import DropDownEdit from "../../../Components/dropDown";
import CardVaksin2 from "../../../Components/cardVaksin/cardVaksin2";
import uuid from "react-uuid";
import Pagination from "../../../Components/pagination";
import jenisVaksinasii from "../../../data/jenisVaksinn";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

export default function Admin({
  data,
  daerahVaksinKedua,
  daerahVaksinPertama,
  defaultProvinsi,
  user,
}) {
  const router = useRouter();
  const [periodeVaksin, setPeriodeVaksin] = useState(defaultProvinsi);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [dataDropdown, setDataDropdown] = useState(data);
  const [dataDropdownJenisVaksin, setDataDropdownJenisVaksin] = useState(data);

  const PageSize = 4;
  const emailAdmin = process.env.ADMIN;

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setCurrentData(filteredData.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, filteredData]);

  const onFilterDropdown = (e) => {
    setDataDropdown(e);
    let filter = null;
    let filterData = null;

    if (e.length > 0) {
      filterData = data.filter((dataBaru) => dataBaru.vaksinId.nama === e);
      // if (periodeVaksin === "Vaksinasi Pertama") {
      //   filterData = filter.filter((dataBaru) => dataBaru.jenisVaksin === e);
      // }
    } else {
      filterData = data;
      setDataDropdown(data);
    }
    setFilteredData(filterData);
    // router.replace(`/vaksinasi/lokasi-vaksinasi/${jenis_vaksin}/${e}`);
  };
  const onFilterDropdownJenisVaksin = (e) => {
    setDataDropdownJenisVaksin(e);
    let filterData = null;

    if (e.length > 0) {
      filterData = data.filter((dataBaru) => dataBaru.jenisVaksin === e);
      if (e === "Vaksinasi Pertama") {
        setPeriodeVaksin(daerahVaksinPertama);
      } else if (e === "Vaksinasi Kedua") {
        setPeriodeVaksin(daerahVaksinKedua);
      }
    } else {
      filterData = data;
      setDataDropdown(data);
      setPeriodeVaksin(defaultProvinsi);
    }
    setFilteredData(filterData);
    // router.replace(`/vaksinasi/lokasi-vaksinasi/${jenis_vaksin}/${e}`);
  };

  if (user.name !== "admin" && user.email !== emailAdmin) {
    return (
      <div className="pt-40">
        <p>You are not authorized to access this page;</p>
      </div>
    );
  }
  
  return (
    <div className="h-screen w-full">
      <section id="first" className={`${styles.section1} w-full relative`}>
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className={`w-full flex flex-col items-center h-full bg-white pb-28 ${styles.content}`}
        >
          <Title color="dark-grey">DAFTAR VAKSINASI</Title>

          <div className="flex flex-row gap-12 w-1/2 items-center justify-center">
            <div className="flex items-center justify-center w-full mt-12">
              <DropDownEdit
                className="w-full"
                color="purple"
                placeholder={"Pilih Provinsi"}
                onChange={onFilterDropdown}
                option={periodeVaksin}
              />
            </div>
            <div className="flex items-center justify-center w-full mt-12">
              <DropDownEdit
                className="w-full"
                color="white"
                placeholder={"Jenis Vaksinasi"}
                classNameControl={`${styles.classNameControl}`}
                onChange={onFilterDropdownJenisVaksin}
                option={jenisVaksinasii}
              />
            </div>
          </div>

          <div
            id="containerCard"
            className={`w-full flex flex-row justify-center gap-12 mt-16 justify-center ${styles.containerCardVaksin}`}
          >
            {currentData.map((item) => (
              <CardVaksin2 item={item} key={uuid()} />
            ))}
          </div>

          <div
            id="pagination"
            className="flex bg-white pb-8 mt-8 justify-center items-center"
          >
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={filteredData.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>

          <button
            className={`absolute bg-purple text-white py-3 rounded-3xl w-72 mt-24 right-0 top-0 mt-56 mr-20 ${styles.buttonTambah}`}
            onClick={() => router.push("/admin/vaksinasi/tambah-data")}
          >
            Tambah Data
          </button>

          <button
            className={`absolute bg-white text-purple py-3 rounded-3xl w-72 mt-24 right-0 top-0 mr-20 ${styles.buttonPeserta}`}
            onClick={() =>
              router.push("/admin/vaksinasi/peserta-vaksinasi/keseluruhan")
            }
          >
            Peserta Vaksinasi
          </button>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const baseUrl = process.env.BASE_URL;
  const lokasiVaksinasi = await fetch(`${baseUrl}api/lokasi-vaksinasi`);

  const resultKetiga = await lokasiVaksinasi.json();

  const filterDataPertama = resultKetiga.data.filter(
    (item) => item.jenisVaksin === "Vaksinasi Pertama"
  );

  const filterDataKedua = resultKetiga.data.filter(
    (item) => item.jenisVaksin === "Vaksinasi Kedua"
  );

  const namaVaksinPertama = filterDataPertama.map((item) => item.vaksinId.nama);
  const namaVaksinKedua = filterDataKedua.map((item) => item.vaksinId.nama);
  const namaVaksin = resultKetiga.data.map((item) => item.vaksinId.nama);

  const namaVaksinUnique = [...new Set(namaVaksin)];
  const namaVaksinMapped = namaVaksinUnique.map((item) => item);

  const namaVaksinPertamaUniqe = [...new Set(namaVaksinPertama)];
  const namaVaksinKeduaUniqe = [...new Set(namaVaksinKedua)];

  const session = await getSession({ req: context.req });
  const user = session.user;

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: resultKetiga.data,
      daerahVaksinPertama: namaVaksinPertamaUniqe,
      daerahVaksinKedua: namaVaksinKeduaUniqe,
      defaultProvinsi: namaVaksinMapped,
      user,
    },
  };
}
