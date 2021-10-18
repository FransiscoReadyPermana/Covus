import React, { useState, useMemo, useEffect } from 'react';
import styles from './table.module.css';
import Pagination from '../pagination';
import Virus from '../icons/virus';
import DropDownEdit from '../dropDown';
import formatK from '../../utils/format';

let PageSize = 10;
export default function TableDataInformasiProvinsi({data}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [currentTableData, setCurrentTableData] = useState([]);
  const [dataDropdown, setDataDropdown] = useState('');

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
  }, [currentPage, filteredData]);

  return (
    <div>
      <div className="flex flex-col w-full relative">
        {/* <div id="virus" className={`flex justify-end `}>
          <Virus className={`absolute mt-28 -mr-40`} />
        </div>
        <div id="virus" className={`flex justify-start `}>
          <Virus
            className={`absolute mt-10 -ml-40 ${styles.virusPositionTop}`}
          />
        </div> */}

        <div className="flex gap-12 items-center mb-10 flex-col">
          <DropDownEdit className="w-1/2" value={dataDropdown} onChange={onFilterDropdown}/>
        </div>

        <div id="table container" className={`${styles.container} z-10`}>
          {/* {filteredData.length != 0 && ( */}
          <table className={`w-full ${styles.table}`}>
            <thead className="bg-purple text-center text-xl text-white font-bold">
              <tr>
                <th className="px-4 py-4">No</th>
                <th className="px-24 py-4">Provinsi</th>
                <th className="px-12">Total Positif</th>
                <th className="px-12">Total Sembuh</th>
                <th className="px-12">Total Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {currentTableData.map((item) => {
                return (
                  <tr key={item._id} className="text-center">
                    <td>{item.no}</td>
                    <td>{item.provinsi}</td>
                    <td>{formatK(item.positif)}</td>
                    <td>{formatK(item.sembuh)}</td>
                    <td>{formatK(item.meninggal)}</td>
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
        {/* <div id="virus" className={`flex justify-end `}>
          <Virus className={`absolute  -mt-48 w-80`} />
        </div> */}
        
        {/* <div id="virus" className={`flex justify-start`}>
          <Virus className={`absolute -mt-56 -ml-20 w-40`} />
        </div> */}
      </div>
    </div>
  );
}
