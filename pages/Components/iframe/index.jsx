import React from 'react';
import Styles from './iframe.module.css'

export default function Iframe() {
  return (
    <div className="flex flex-col w-10/12 h-screen">
      <iframe
        src="https://peta.laporcovid19.org/"
        frameBorder="0"
        className={`w-full ${Styles.HIframe} rounded-lg mb-5 overflow-hidden`}
      ></iframe>
      <button className={`bg-dark-grey text-white p-4 rounded-full font-medium text-lg ${Styles.button}`}>Lihat selengkapnya</button>
    </div>
  );
}
