import React, { useState, useMemo, useEffect } from "react";
import stylesGlobal from "./tableGlobal.module.css";
import stylesProvinsi from "./tableProvinsi.module.css";
import stylesHospitals from "./tableHospitals.module.css";
import Pagination from "../pagination";
import Virus from "../icons/virus";
import DropDownEdit from "../dropDown";
import formatK from "../../utils/format";
import Image from "next/image";
import SearchInput from "../searchInput";

export default function TableData({ data, type }) {
  const [currentPageProvinsi, setCurrentPageProvinsi] = useState(1);
  const [filteredDataProvinsi, setFilteredDataProvinsi] = useState(data);
  const [currentTableDataProvinsi, setCurrentTableDataProvinsi] = useState([]);
  const [dataDropdownProvinsi, setDataDropdownProvinsi] = useState("");

  const [currentPageHospitals, setCurrentPageHospitals] = useState(1);
  const [filteredDataHospitals, setFilteredDataHospitals] = useState(data);
  const [userInputHospitals, setUserInputHospitals] = useState("");
  const [currentTableDataHospitals, setCurrentTableDataHospitals] = useState(
    []
  );
  const [dataDropdownHospitals, setDataDropdownHospitals] = useState("");

  useEffect(() => {
    const firstPageIndex = (currentPageProvinsi - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setCurrentTableDataProvinsi(
      filteredDataProvinsi.slice(firstPageIndex, lastPageIndex)
    );
  }, [currentPageProvinsi, filteredDataProvinsi]);

  useEffect(() => {
    const firstPageIndex = (currentPageHospitals - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setCurrentTableDataHospitals(
      filteredDataHospitals.slice(firstPageIndex, lastPageIndex)
    );
    // return filteredDataHospitals.slice(firstPageIndex, lastPageIndex);
  }, [currentPageHospitals, filteredDataHospitals]);

  let PageSize = 10;
  if (type === "Global") {
    return (
      <div id="table container" className={`${stylesGlobal.container} z-10`}>
        <table className={`w-full h-80 text-center ${stylesGlobal.table}`}>
          <thead className="bg-purple text-center text-xl text-white font-bold">
            <tr>
              <th className="px-20 py-4">Nama Negara</th>
              <th className="px-12 py-4">Total Kasus</th>
              <th className="px-12">Total Meninggal</th>
              <th className="px-12">Total Sembuh</th>
              <th className="px-12">Kasus Aktif</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              let indonesia;
              if (item.country === "Indonesia") {
                indonesia = stylesGlobal.indonesia;
              }
              return (
                <tr key={item._id} className={indonesia}>
                  <td className="uppercase">{item.country}</td>
                  <td>{item.cases ? formatK(item.cases) : 0}</td>
                  <td>{item.deaths ? formatK(item.deaths) : 0}</td>
                  <td>{item.recovered ? formatK(item.recovered) : 0}</td>
                  <td className={`${stylesGlobal.last}`}>
                    {item.active ? formatK(item.active) : 0}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (type === "Provinsi") {
    const onFilterDropdown = (e) => {
      setDataDropdownProvinsi(e);
      let filterProvinsi = null;

      if (e.length > 0) {
        filterProvinsi = data.filter((data) =>
          new RegExp(e, "gi").test(data.key)
        );
      } else {
        filterProvinsi = data;
        setDataDropdownProvinsi("Pilih Provinsi");
      }
      setFilteredDataProvinsi(filterProvinsi);
    };
    return (
      <div>
        <div className="flex flex-col w-full relative">
          <div className="flex gap-12 items-center mb-10 flex-row justify-center">
            <DropDownEdit
              className="w-1/2"
              value={dataDropdownProvinsi}
              onChange={onFilterDropdown}
            />
            <button
              className="bg-purple flex items-center justify-center w-20 h-12 rounded-3xl"
              onClick={onFilterDropdown}
            >
              <div className="relative  w-8 h-8">
                <Image
                  src="/images/ion_reload-sharp.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>
            </button>
          </div>

          <div
            id="table container"
            className={`${stylesProvinsi.container} z-10`}
          >
            <table className={`w-full ${stylesProvinsi.table}`}>
              <thead className="bg-purple text-center text-xl text-white font-bold">
                <tr>
                  <th className="px-28 py-4">Provinsi</th>
                  <th className="px-12">Total Kasus</th>
                  <th className="px-12">Total Sembuh</th>
                  <th className="px-12">Total Meninggal</th>
                  <th className="px-12">Dirawat</th>
                </tr>
              </thead>
              <tbody>
                {currentTableDataProvinsi.map((item) => {
                  return (
                    <tr key={item._id} className="text-center">
                      <td>{item.key}</td>
                      <td>{formatK(item.jumlah_kasus)}</td>
                      <td>{formatK(item.jumlah_sembuh)}</td>
                      <td>{formatK(item.jumlah_meninggal)}</td>
                      <td className={`${stylesProvinsi.last}`}>
                        {formatK(item.jumlah_dirawat)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <Pagination
            className="pagination-bar"
            currentPage={currentPageProvinsi}
            totalCount={filteredDataProvinsi.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPageProvinsi(page)}
          />
        </div>
      </div>
    );
  }
  if (type === "Hospitals") {
    const onSearchHandler = (e) => {
      setUserInputHospitals(e.target.value);

      let filterHospital = null;
      if (e.target.value.length > 0) {
        const filterHospitalProv = data.filter((data) =>
          new RegExp(e.target.value, "gi").test(data.provinsi)
        );
        const filterHospitalNama = data.filter((data) =>
          new RegExp(e.target.value, "gi").test(data.nama)
        );
        const filterHospitalAlamat = data.filter((data) =>
          new RegExp(e.target.value, "gi").test(data.alamat)
        );

        filterHospital = Array.from(
          new Set([
            ...filterHospitalProv,
            ...filterHospitalNama,
            ...filterHospitalAlamat,
          ])
        );
      } else {
        filterHospital = data;
      }
      setFilteredDataHospitals(filterHospital);
    };

    const onFilterDropdown = (e) => {
      setDataDropdownHospitals(e);

      let filterProvinsi = null;
      if (e.length > 0) {
        filterProvinsi = data.filter((data) =>
          new RegExp(e, "gi").test(data.provinsi)
        );
      } else {
        filterProvinsi = data;
        setDataDropdownHospitals("Pilih Provinsi");
      }
      setFilteredDataHospitals(filterProvinsi);
    };

    return (
      <div>
        <div className="flex flex-col w-full relative">
          <div id="virus" className={`flex justify-end `}>
            <Virus className={`absolute mt-28 -mr-40`} />
          </div>
          <div id="virus" className={`flex justify-start `}>
            <Virus
              className={`absolute mt-10 -ml-40 ${stylesHospitals.virusPositionTop}`}
            />
          </div>

          <div className="flex gap-12 items-center mb-10">
            <DropDownEdit
              className="w-1/2"
              value={dataDropdownHospitals}
              onChange={onFilterDropdown}
            />
            <SearchInput
              className="w-full"
              onChangeHandler={(e) => onSearchHandler(e)}
              value={userInputHospitals}
              onClick={onFilterDropdown}
            />
          </div>

          <div
            id="table container"
            className={`${stylesHospitals.container} z-10`}
          >
            {/* {filteredDataHospitals.length != 0 && ( */}
            <table className={`w-full ${stylesHospitals.table}`}>
              <thead className="bg-purple text-center text-xl text-white font-bold">
                <tr>
                  <th className="px-3 py-4">No</th>
                  <th className="px-3 py-4">Provinsi</th>
                  <th>Nama Rumah Sakit</th>
                  <th>Alamat</th>
                  <th>Telepon</th>
                </tr>
              </thead>
              <tbody>
                {currentTableDataHospitals.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item.no}</td>
                      <td>{item.provinsi}</td>
                      <td>{item.nama}</td>
                      <td>{item.alamat}</td>
                      <td>{item.telp}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* )} */}
          </div>

          <Pagination
            className="pagination-bar"
            currentPage={currentPageHospitals}
            totalCount={filteredDataHospitals.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPageHospitals(page)}
          />
          <div id="virus" className={`flex justify-end `}>
            <Virus className={`absolute  -mt-48 w-80`} />
          </div>

          <div id="virus" className={`flex justify-start`}>
            <Virus className={`absolute -mt-56 -ml-20 w-40`} />
          </div>
        </div>
      </div>
    );
  }
}
