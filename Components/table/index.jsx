import React, { useState, useMemo, useEffect } from 'react';
import stylesGlobal from './tableGlobal.module.css';
import stylesProvinsi from './tableProvinsi.module.css';
import stylesHospitals from './tableHospitals.module.css';
import stylePeserta from './tablePesertaVaksin.module.css';
import Pagination from '../pagination';
import Virus from '../icons/virus';
import DropDownEdit from '../dropDown';
import formatK from '../../utils/format';
import Image from 'next/image';
import SearchInput from '../searchInput';
import uuid from 'react-uuid';
import kota from '../dropDown/dataKota';
import Vaksin from './../icons/Vaksin';
import PopUpKontradiksi from './../pop-up/pop-up-kontradiksi/index';

export default function TableData({ data, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [kontradiksi, setKontradiksi] = useState([]);
  const [currentPageProvinsi, setCurrentPageProvinsi] = useState(1);
  const [filteredDataProvinsi, setFilteredDataProvinsi] = useState(data);
  const [currentTableDataProvinsi, setCurrentTableDataProvinsi] = useState([]);
  const [dataDropdownProvinsi, setDataDropdownProvinsi] = useState('');

  const [currentPageHospitals, setCurrentPageHospitals] = useState(1);
  const [filteredDataHospitals, setFilteredDataHospitals] = useState(data);
  const [userInputHospitals, setUserInputHospitals] = useState('');
  const [currentTableDataHospitals, setCurrentTableDataHospitals] = useState(
    []
  );
  const [dataDropdownHospitals, setDataDropdownHospitals] = useState('');
  const [currentPagePesertaVaksin, setCurrentPagePesertaVaksin] = useState(1);
  const [filteredDataPesertaVaksin, setFilteredDataPesertaVaksin] =
    useState(data);
  console.log(filteredDataPesertaVaksin);
  const [userInputPesertaVaksin, setUserInputPesertaVaksin] = useState('');
  const [currentTableDataPesertaVaksin, setCurrentTableDataPesertaVaksin] =
    useState([]);
  const [dataDropdownPesertaVaksin, setDataDropdownPesertaVaksin] =
    useState('');

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

  useEffect(() => {
    const firstPageIndex = (currentPagePesertaVaksin - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setCurrentTableDataPesertaVaksin(
      filteredDataPesertaVaksin.slice(firstPageIndex, lastPageIndex)
    );
    // return filteredDataPesertaVaksin.slice(firstPageIndex, lastPageIndex);
  }, [currentPagePesertaVaksin, filteredDataPesertaVaksin]);

  const kontradiksiHandler = (data) => {
    setKontradiksi(data);
    setIsOpen(true);
  };

  let PageSize = 10;
  if (type === 'Global') {
    return (
      <div id="table container" className={`${stylesGlobal.container} z-10`}>
        <table className={`w-full h-80 text-center ${stylesGlobal.table}`}>
          <thead className="bg-purple text-center text-xl text-white font-bold">
            <tr>
              <th className={`px-20 ${stylesGlobal.head}`}>Nama Negara</th>
              <th className={`px-12 ${stylesGlobal.head}`}>Total Kasus</th>
              <th className="px-12">Total Meninggal</th>
              <th className="px-12">Total Sembuh</th>
              <th className="px-12">Kasus Aktif</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              let indonesia;
              if (item.country === 'Indonesia') {
                indonesia = stylesGlobal.indonesia;
              }
              return (
                <tr key={uuid()} className={indonesia}>
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

  if (type === 'Provinsi') {
    const onFilterDropdown = (e) => {
      setDataDropdownProvinsi(e);
      let filterProvinsi = null;

      if (e.length > 0) {
        filterProvinsi = data.filter((data) =>
          new RegExp(e, 'gi').test(data.key)
        );
      } else {
        filterProvinsi = data;
        setDataDropdownProvinsi('Pilih Provinsi');
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
              color="purple"
              placeholder="Pilih Provinsi"
              option={kota}
            />
            <button
              className={`bg-white flex items-center justify-center h-12 rounded-3xl ${stylesProvinsi.reset}`}
              onClick={onFilterDropdown}
            >
              <div className="relative w-8 h-8">
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
                  <th className={`px-28 ${stylesProvinsi.head}`}>Provinsi</th>
                  <th className="px-12">Total Kasus</th>
                  <th className="px-12">Total Sembuh</th>
                  <th className="px-12">Total Meninggal</th>
                  <th className="px-12">Dirawat</th>
                </tr>
              </thead>
              <tbody>
                {currentTableDataProvinsi.map((item) => {
                  return (
                    <tr key={uuid()} className="text-center">
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
  if (type === 'Hospitals') {
    const onSearchHandler = (e) => {
      setUserInputHospitals(e.target.value);

      let filterHospital = null;
      if (e.target.value.length > 0) {
        const filterHospitalProv = data.filter((data) =>
          new RegExp(e.target.value, 'gi').test(data.provinsi)
        );
        const filterHospitalNama = data.filter((data) =>
          new RegExp(e.target.value, 'gi').test(data.nama)
        );
        const filterHospitalAlamat = data.filter((data) =>
          new RegExp(e.target.value, 'gi').test(data.alamat)
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
          new RegExp(e, 'gi').test(data.provinsi)
        );
      } else {
        filterProvinsi = data;
        setDataDropdownHospitals('Pilih Provinsi');
      }
      setFilteredDataHospitals(filterProvinsi);
    };

    return (
      <div>
        <div className="flex flex-col w-full relative">
          <div id="virus" className={`${stylesHospitals.containerVirusRight}`}>
            <Virus className={`absolute ${stylesHospitals.virusRightTop}`} />
          </div>
          <div id="virus" className={`${stylesHospitals.containerVirusLeft}`}>
            <Virus className={`absolute ${stylesHospitals.virusLeftTop}`} />
          </div>

          <div className="flex gap-12 items-center mb-10">
            <DropDownEdit
              className="w-1/2"
              value={dataDropdownHospitals}
              onChange={onFilterDropdown}
              color="purple"
              placeholder="Pilih Provinsi"
              option={kota}
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
                  <th className={`${stylesHospitals.head}`}>No</th>
                  <th className={`${stylesHospitals.head}`}>Provinsi</th>
                  <th>Nama Rumah Sakit</th>
                  <th>Alamat</th>
                  <th>Telepon</th>
                </tr>
              </thead>
              <tbody>
                {currentTableDataHospitals.map((item) => {
                  return (
                    <tr key={uuid()}>
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
          <div id="virus" className={`${stylesHospitals.containerVirusRight}`}>
            <Virus className={`absolute ${stylesHospitals.virusBottomRight}`} />
          </div>

          <div id="virus" className={`${stylesHospitals.containerVirusLeft}`}>
            <Virus className={`absolute ${stylesHospitals.virusBottomLeft}`} />
          </div>
        </div>
      </div>
    );
  }
  if (type === 'peserta-vaksinasi') {
    const onSearchHandler = (e) => {
      setUserInputPesertaVaksin(e.target.value);

      let filterPesertaVaksin = null;
      if (e.target.value.length > 0) {
        const filterPesertaVaksinNamaPeserta = data.filter((data) =>
          new RegExp(e.target.value, 'gi').test(data.userId.nama)
        );
        const filterPesertaVaksinNamaVaksin = data.filter((data) =>
          new RegExp(e.target.value, 'gi').test(data.namaVaksin)
        );
        const filterPesertaVaksinJenisVaksin = data.filter((data) =>
          new RegExp(e.target.value, 'gi').test(data.jenisVaksin)
        );
        const filterPesertaVaksinTanggalVaksin = data.filter((data) =>
          new RegExp(e.target.value, 'gi').test(data.tanggal)
        );
        const filterPesertaVaksinWaktuVaksin = data.filter((data) =>
          new RegExp(e.target.value, 'gi').test(data.waktu)
        );
        const filterPesertaVaksinLokasiVaksin = data.filter((data) => {
          new RegExp(e.target.value, 'gi').test(data.lokasi1);
          new RegExp(e.target.value, 'gi').test(data.lokasi2);
          new RegExp(e.target.value, 'gi').test(data.provinsi);
        });
        // const filterPesertaVaksinKontradiksiVakasin = data.filter((data) =>
        //   new RegExp(e.target.value, 'gi').test(data.alamat)
        // );

        filterPesertaVaksin = Array.from(
          new Set([
            ...filterPesertaVaksinNamaPeserta,
            ...filterPesertaVaksinNamaVaksin,
            ...filterPesertaVaksinJenisVaksin,
            ...filterPesertaVaksinTanggalVaksin,
            ...filterPesertaVaksinWaktuVaksin,
            ...filterPesertaVaksinLokasiVaksin,
            // ...filterPesertaVaksinKontradiksiVakasin,
          ])
        );
      } else {
        filterPesertaVaksin = data;
      }
      setFilteredDataPesertaVaksin(filterPesertaVaksin);
    };

    return (
      <div>
        <div className="flex flex-col w-full relative">
          <div className="flex gap-12 items-center mb-10">
            <SearchInput
              className="w-full"
              onChangeHandler={(e) => onSearchHandler(e)}
              value={userInputPesertaVaksin}
              classNameContainer="w-full px-40"
              classNameInput={`${stylePeserta.input}`}
            />
          </div>

          <div
            id="table container"
            className={`${stylePeserta.container} z-10`}
          >
            {/* {filteredDataHospitals.length != 0 && ( */}
            <table className={`w-full ${stylePeserta.table}`}>
              <thead className="bg-purple text-center text-xl text-white font-bold">
                <tr>
                  <th className={`${stylePeserta.head}`}>Nama Peserta</th>
                  <th className={`${stylePeserta.head}`}>Nama Vaksin</th>
                  <th className={`${stylePeserta.head}`}>Jenis Vaksin</th>
                  <th className={`${stylePeserta.head}`}>Tanggal</th>
                  <th className={`${stylePeserta.head}`}>Waktu</th>
                  <th className={`${stylePeserta.head}`}>Penyelenggara</th>
                  <th className={`${stylePeserta.head}`}>Lokasi</th>
                  <th className={`${stylePeserta.head}`}>Kontradiksi</th>
                  <th className={`${stylePeserta.head}`}>Hapus Data</th>
                </tr>
              </thead>
              <tbody>
                <PopUpKontradiksi
                  open={isOpen}
                  onClick={() => {
                    setIsOpen(false);
                    setKontradiksi([]);
                  }}
                  onClickBackground={() => {
                    setIsOpen(false);
                    setKontradiksi([]);
                  }}
                >
                  <ul>
                    {kontradiksi.map((item) => {
                      return (
                        <li
                          key={uuid()}
                          className={`text-left ${stylePeserta.list}`}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </PopUpKontradiksi>
                {currentTableDataPesertaVaksin.map((item) => {
                  return (
                    <tr key={uuid()}>
                      <td>{item.userId.nama}</td>
                      <td>{item.namaVaksin}</td>
                      <td>{item.jenisVaksin}</td>
                      <td>{item.tanggal}</td>
                      <td>{item.waktu}</td>
                      <td>{item.nama}</td>
                      <td>
                        {item.lokasi1} <br /> {item.lokasi2}
                      </td>
                      <td>
                        <ul>
                          {item.kontradiksi.map((item) => {
                            return (
                              <li
                                key={uuid()}
                                className={`text-left ${stylePeserta.list}`}
                              >
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                        {/* {item.kontradiksi.map((item) => {
                            return (
                              );
                            })} */}
                        <button
                          className={`bg-purple p-2 rounded-xl ${stylePeserta.kontradiksi}`}
                          type="button"
                          onClick={() => kontradiksiHandler(item.kontradiksi)}
                        >
                          <Vaksin />
                        </button>
                      </td>
                      <td>
                        <button className={`${stylePeserta.hapus}`}>
                          Hapus
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* )} */}
          </div>

          <Pagination
            className="pagination-bar"
            currentPage={currentPagePesertaVaksin}
            totalCount={filteredDataPesertaVaksin.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPagePesertaVaksin(page)}
          />
          {/* <p>{filteredDataPesertaVaksin}</p> */}
        </div>
      </div>
    );
  }
}
