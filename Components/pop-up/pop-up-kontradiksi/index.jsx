import React, { Children, useState } from 'react';
import style from '../profile.module.css';
import Close from '../../icons/Close';
import uuid from 'react-uuid';

export default function PopUpKontradiksi({
  open,
  onClickBackground,
  onClick,
  item,
  children
}) {
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
        className={`fixed bg-white py-10 px-20 flex flex-col items-center ${style.container} ${style.SK}`}
      >
        <button
          className={`fixed right-8 top-8 rounded-full ${style.close}`}
          onClick={onClick}
        >
          <Close />
        </button>

        <h1
          className={`text-center text-dark-grey mb-4 leading-loose ${style.judul}`}
        >
          Kontradiksi Vaksin
        </h1>

        <div className="text-center font-normal text-dark-grey">
          Kontradiksi yang dimiliki oleh pasien
          {children}
          {/* <ul>
            <li className={`text-left ${style.list}`}>{item}</li>
          </ul> */}
        </div>
      </div>
    </>
  );
}
