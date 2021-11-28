import React, { useState } from "react";
import style from "../profile.module.css";
import Close from "../../icons/Close";

export default function PopUpPenyakit({ open, onClickBackground, onClick }) {
  if (!open) {
    return null;
  }

  return (
    <>
      <div
        id="background"
        className={`fixed h-screen w-full flex items-center justify-center top-0 left-0 ${style.background}`}
        onClick={onClickBackground}
      />
      <div
        id="container"
        className={`fixed bg-white py-10 px-20 h-1/2 flex flex-col items-center ${style.container} ${style.SK}`}
      >
        <button
          className={`absolute right-8 top-8 rounded-full ${style.close}`}
          onClick={onClick}
        >
          <Close />
        </button>

        <h1
          className={`text-center text-dark-grey mb-4 leading-loose ${style.judul}`}
        >
          Catatan Vaksinasi
        </h1>

        <p className="text-center font-normal text-dark-grey">
          Jenis Vaksin yang diambil adalah{" "}
          <span
            className={`text-l text-white bg-dark-grey rounded-full ml-1 ${style.jenis_vaksin}`}
          >
            Astrazeneca
          </span>
          <div className="px-6">
            <hr
              className={`h-1 bg-dark-grey w-full opacity-25 ${style.divider}`}
            />
          </div>
          <div className="mb-2">
            <b className="text-dark-grey">
              {" "}
              Saya memiliki kontradiksi Vaksin berupa :{" "}
            </b>
          </div>
          <p
            className={`text-justify font-normal px-10 mt-1 text-dark-grey ${style.kontradinsi}`}
          >
            Menderita COVID-19 selama 3 bulan terakhir
          </p>
          <p
            className={`text-justify font-normal px-10 mt-1 text-dark-grey ${style.kontradinsi}`}
          >
            Menderita COVID-19 selama 3 bulan terakhir
          </p>
          <p
            className={`text-justify font-normal px-10 mt-1 text-dark-grey ${style.kontradinsi}`}
          >
            Menderita COVID-19 selama 3 bulan terakhir
          </p>
        </p>
      </div>
    </>
  );
}
