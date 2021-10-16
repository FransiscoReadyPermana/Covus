import React, { useState, useMemo } from 'react';
import styles from './table.module.css';
import Pagination from '../pagination';
import rumahSakit from '../../data/rumahSakit.js';
import Virus from '../icons/virus';

let PageSize = 10;
export default function TableData({data}) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return rumahSakit.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <div className="flex flex-col w-full relative">
        <div id="virus" className={`flex justify-end `}>
          <Virus
            className={`absolute -mt-20 -mr-28 ${styles.virusPositionTop}`}
          />
        </div>
        <div id="table container" className={`${styles.container} z-10`}>
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
              {data.map((item) => {
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
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={rumahSakit.length}
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
