import React, { useState } from "react";
import style from "../profile.module.css";
import Image from "next/image";

export default function PopUpProfile({
  open,
  onClickBackground,
  onClickSimpan,
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
        className={`fixed bg-white py-10 px-20 flex flex-col items-center ${style.container}`}
      >
        <h1
          className={`text-center text-dark-grey mb-6 leading-loose ${style.judul}`}
        >
          Apakah Anda yakin ingin menyimpan <br /> perubahan ini?
        </h1>

        <div id="illustrasi" className={"relative h-48 w-48"}>
          <Image
            src="/images/Question.svg"
            alt="reading-book-image"
            layout="fill"
          />
        </div>

        <div
          id="button"
          className="flex flex-row items-center justify-between gap-6 w-full mt-10"
        >
          <button
            className={`bg-white text-purple py-3 rounded-3xl w-full ${style.button_batal}`}
            onClick={onClickSimpan}
          >
            Tidak
          </button>

          <button
            className={`bg-purple text-white py-3 rounded-3xl w-full ${style.button}`}
            onClick={onClickSimpan}
          >
            Simpan
          </button>
        </div>
      </div>
    </>
  );
}
