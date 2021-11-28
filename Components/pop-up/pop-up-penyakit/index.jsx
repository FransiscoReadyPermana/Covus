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
        className={`fixed bg-white py-10 px-20 h-3/4 flex flex-col items-center mt-12 ${style.container} ${style.SK}`}
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
          Kontradiksi Vaksin
        </h1>

        <p className="text-center font-normal">
          <p className="text-justify font-normal px-10">
            <b className="mr-2">1.</b>Jenis Vaksin yang diambil adalah
            <br /> <br />
            <b className="mr-2">2.</b>Ibu hamil (minimal 13 minggu) dapat
            diberikan vaksin jenis Pfizer, atau Sinovac
            <br /> <br />
            <b className="mr-2">3.</b>Peserta berusia 17 tahun ke atas wajib
            membawa KTP (berlaku untuk semua wilayah) pada hari vaksinasi dan
            peserta 12-17 tahun wajib membawa salinan Kartu Keluarga
            <br /> <br />
            <b className="mr-2">4.</b>Seluruh peserta wajib mendaftarkan diri
            terlebih dahulu dan pastikan telah melakukan registrasi dan login
            kedalam COVUS
            <br /> <br />
            <b className="mr-2">5.</b>Peserta wajib menunjukkan bukti
            pendaftaran yang akan diverifikasi ulang oleh petugas di lokasi
            tempat Vaksinasi yang telah dipilih.
            <br /> <br />
            <b className="mr-2">6.</b>Peserta dalam keadaan sehat dan tidak
            memiliki gejala COVID-19. <br />
            <p className="mt-2">
              Jika Peserta memiliki penyakit penyerta dapat membawa surat
              kelayakan untuk divaksinasi dari dokter.
            </p>
            <p className="pl-5 mt-2">
              - Penyintas dengan gejala ringan dapat dilakukan vaksinasi dengan
              jarak 1 bulan sejak negatif atau selesai isolasi mandiri (isoman).
            </p>
            <p className="pl-5 mt-2">
              - Penyintas dengan gejala sedang-berat (riwayat masuk di rumah
              sakit) vaksinasi tetap dilakukan dengan jarak 3 bulan sejak
              negatif.
            </p>
            <br />
            <b className="mr-2">7.</b>Peserta menggunakan baju yang longgar di
            area lengan atas untuk memudahkan penyuntikan.
            <br /> <br />
          </p>
          <p className="text-center font-semibold">
            Penyelenggara berhak menolak jika peserta tidak memenuhi syarat dan
            ketentuan di atas
          </p>
        </p>
      </div>
    </>
  );
}
