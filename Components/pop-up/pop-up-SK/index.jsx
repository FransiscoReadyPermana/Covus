import React, { useState } from "react";
import style from "../profile.module.css";
import Close from "../../icons/Close";

export default function PopUpSK({ open, onClickBackground, onClick }) {
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
          className={`fixed right-8 top-8 rounded-full ${style.close}`}
          onClick={onClick}
        >
          <Close />
        </button>

        <h1
          className={`text-center text-dark-grey mb-4 leading-loose ${style.judul}`}
        >
          Syarat dan Ketentuan
        </h1>

        <p className="text-center font-normal text-dark-grey">
          COVUS membuka Layanan Vaksinasi COVID-19 Secara GRATIS bagi seluruh
          warna negara Indonesia hingga Desember 2021, bekerja sama dengan
          beberapa lembaga Kesehatan serta didukung oleh Universitas Pembangunan
          Veteran Jakarta
          <br /> <br />
          <hr className="h-1 bg-dark-grey w-full opacity-25" />
          <br />
          <p className="text-justify font-normal px-10 text-dark-grey">
            <b className="mr-2 text-dark-grey">1.</b>Program berlaku khusus
            untuk Warga Negara Indonesia (WNI), dengan jenis vaksin sesuai
            ketersediaan.
            <br /> <br />
            <b className="mr-2 text-dark-grey">2.</b>Ibu hamil (minimal 13
            minggu) dapat diberikan vaksin jenis Pfizer, atau Sinovac
            <br /> <br />
            <b className="mr-2 text-dark-grey">3.</b>Peserta berusia 17 tahun ke
            atas wajib membawa KTP (berlaku untuk semua wilayah) pada hari
            vaksinasi dan peserta 12-17 tahun wajib membawa salinan Kartu
            Keluarga
            <br /> <br />
            <b className="mr-2 text-dark-grey">4.</b>Seluruh peserta wajib
            mendaftarkan diri terlebih dahulu dan pastikan telah melakukan
            registrasi dan login kedalam COVUS
            <br /> <br />
            <b className="mr-2 text-dark-grey">5.</b>Peserta wajib menunjukkan
            bukti pendaftaran yang akan diverifikasi ulang oleh petugas di
            lokasi tempat Vaksinasi yang telah dipilih.
            <br /> <br />
            <b className="mr-2 text-dark-grey">6.</b>Peserta dalam keadaan sehat
            dan tidak memiliki gejala COVID-19. <br />
            <p className="mt-2 text-dark-grey">
              Jika Peserta memiliki penyakit penyerta dapat membawa surat
              kelayakan untuk divaksinasi dari dokter.
            </p>
            <p className="pl-5 mt-2 text-dark-grey">
              - Penyintas dengan gejala ringan dapat dilakukan vaksinasi dengan
              jarak 1 bulan sejak negatif atau selesai isolasi mandiri (isoman).
            </p>
            <p className="pl-5 mt-2 text-dark-grey">
              - Penyintas dengan gejala sedang-berat (riwayat masuk di rumah
              sakit) vaksinasi tetap dilakukan dengan jarak 3 bulan sejak
              negatif.
            </p>
            <br />
            <b className="mr-2 text-dark-grey">7.</b>Peserta menggunakan baju
            yang longgar di area lengan atas untuk memudahkan penyuntikan.
            <br /> <br />
          </p>
          <p className="text-center font-semibold text-dark-grey">
            Penyelenggara berhak menolak jika peserta tidak memenuhi syarat dan
            ketentuan di atas
          </p>
        </p>
      </div>
    </>
  );
}
