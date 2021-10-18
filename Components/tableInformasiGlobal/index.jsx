import React from 'react';
import styles from './table.module.css';
import formatK from '../../utils/format';

export default function TableDataInformasiGlobal({data}) {
  return (
        <div id="table container" className={`${styles.container} z-10`}>
          <table className={`w-full h-80 text-center ${styles.table}`}>
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
                  indonesia = styles.indonesia;
                } return (
                  <tr key={item._id} className={indonesia}>
                    <td className="uppercase">{item.country}</td>
                    <td>{item.cases?formatK(item.cases):0}</td>
                    <td>{item.deaths?formatK(item.deaths):0}</td>
                    <td>{item.recovered?formatK(item.recovered):0}</td>
                    <td className={`${styles.last}`}>{item.active?formatK(item.active):0}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
  );
}
