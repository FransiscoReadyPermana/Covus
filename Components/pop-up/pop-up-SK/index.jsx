import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "../profile.module.css";
import EyeShow from "../../icons/EyeShow";
import EyeHide from "../../icons/EyeHide";
import Image from "next/image";

export default function PopUpBerhasil({ open, onClickBackground }) {
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
        className={`fixed bg-white py-10 px-20  flex flex-col items-center ${style.container}`}
      >
        <h1
          className={`text-center text-dark-grey mb-4 leading-loose ${style.judul}`}
        >
          Syarat dan Ketentuan
        </h1>

       
      </div>
    </>
  );
}
