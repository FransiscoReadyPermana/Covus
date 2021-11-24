import React, { useState } from "react";
import style from "../profile.module.css";
import Image from "next/image";

export default function PopUp({
  open,
  onClickBackground,
  onClickSimpan,
  pertanyaan1,
  pertanyaan2,
  gambar,
  button_primary,
  button_secondary,
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
          className={`text-center text-dark-grey mb-6 leading-loose tracking-wider ${style.judul}`}
        >
         {pertanyaan1} <br/> {pertanyaan2}
        </h1>

        <div id="illustrasi" className={"relative h-48 w-48"}>
          <Image
            src={gambar}
            alt="reading-book-image"
            layout="fill"
          />
        </div>

        <div
          id="button"
          className="flex flex-row items-center justify-between gap-6 w-full mt-12"
        >
          <button
            className={`bg-white text-purple py-3 rounded-3xl w-full ${style.button_batal}`}
            onClick={onClickSimpan}
          >
            {button_secondary}
          </button>

          <button
            className={`bg-purple text-white py-3 rounded-3xl w-full ${style.button}`}
            onClick={onClickSimpan}
          >
           {button_primary}
          </button>
        </div>
      </div>
    </>
  );
}
