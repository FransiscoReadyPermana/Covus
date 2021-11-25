import React from "react";
import Link from "next/link";
import Styles from "./iframe.module.css";
import Virus from "../icons/virus";

export default function Iframe() {
  return (
    <div className="flex flex-col w-10/12 relative">
      <div id="virus" className={`bg-green justify-start `}>
        <Virus className={`absolute ${Styles.virusPositionTop}`} />
      </div>

      <iframe
        src="https://peta.laporcovid19.org/"
        frameBorder="0"
        className={`w-full ${Styles.HIframe} rounded-lg overflow-hidden`}
      ></iframe>

      <div id="virus" className={`${Styles.containerVirusBot}`}>
        <Virus className={`absolute ${Styles.virusPositionBottom}`} />
      </div>

      <Link href="/informasi" passHref={true}>
        <button
          className={`bg-dark-grey text-white rounded-full font-medium text-2xl ${Styles.button}`}
        >
          Lihat selengkapnya
        </button>
      </Link>
    </div>
  );
}
