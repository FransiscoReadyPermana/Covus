import React, { useState, useMemo, useEffect } from 'react';
import styles from './table.module.css';
import Pagination from '../pagination';
import Virus from '../icons/virus';
import DropDownEdit from '../dropDown';
import SearchInput from '../searchInput';

let PageSize = 10;
export default function TableData({data}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [userInput, setUserInput] = useState('');
  const [currentTableData, setCurrentTableData] = useState([]);
  const [dataDropdown, setDataDropdown] = useState('');

  const onSearchHandler = (e) => {
    setUserInput(e.target.value);

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
    setFilteredData(filterHospital);
  };

  const onFilterDropdown = (e) => {
    setDataDropdown(e);

    let filterProvinsi = null;
    if (e.length > 0) {
      filterProvinsi = data.filter((data) =>
        new RegExp(e, 'gi').test(data.provinsi)
      );
  } else {
    filterProvinsi = data;
  } setFilteredData(filterProvinsi);
  };

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setCurrentTableData(filteredData.slice(firstPageIndex, lastPageIndex));
    // return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return filteredData.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  return (
    <div>
      <div className="flex flex-col w-full relative">
        <div id="virus" className={`flex justify-end `}>
          <Virus className={`absolute mt-28 -mr-40`} />
        </div>
        <div id="virus" className={`flex justify-start `}>
          <Virus
            className={`absolute mt-10 -ml-40 ${styles.virusPositionTop}`}
          />
        </div>

        <div className="flex gap-12 items-center mb-10">
          <DropDownEdit className="w-1/2" value={dataDropdown} onChange={onFilterDropdown}/>
          <SearchInput className="w-full" onChangeHandler={(e) => onSearchHandler(e)} value={userInput}/>
        </div>

        <div id="table container" className={`${styles.container} z-10`}>
          {/* {filteredData.length != 0 && ( */}
          <table className={`w-full h-80 ${styles.table}`}>
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
              {currentTableData.map((item) => {
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
          currentPage={currentPage}
          totalCount={filteredData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
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
