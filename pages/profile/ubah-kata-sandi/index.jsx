import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../../styles/edit.module.css';
import Footer from '../../../Components/footer';
import PopUp from '../../../Components/pop-up/pop-up';
import EyeShow from '../../../Components/icons/EyeShow';
import EyeHide from '../../../Components/icons/EyeHide';

export default function UbahKataSandi() {
  const [isOpen, setIsOpen] = useState(false);
  const [keluar, setKeluar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [showLPassword, setShowLPassword] = useState(false);

  return (
    <>
      <div className="h-screen w-full">
        <section
          id="first"
          className={`${styles.section1} w-full h-full relative bg-purple pb-8 flex flex-col items-center justify-center`}
        >
          <div
            id="container"
            className={`h-full w-3/4 flex flex-row content-between justify-between gap-24 mt-40 ${styles.container_konten}`}
          >
            <div
              id="kiri"
              className={`bg-white w-1/3 h-full flex flex-col items-start px-8 ${styles.container}`}
            >
              <p
                color="dark-grey"
                className="text-center font-semibold text-2xl text-dark-grey mt-12"
              >
                Raihan Kemmy Rachmansyah
              </p>

              <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

              <Link href={`/profile/akun-saya`} passHref>
                <div
                  id="akun"
                  className={`flex flex-row pl-6 py-3 w-full ${styles.container_icon}`}
                >
                  <div
                    id="icon"
                    className={`relative h-7 w-7 flex items-center justify-center`}
                  >
                    <Image src="/images/profile.svg" alt="" layout="fill" />
                  </div>

                  <p
                    color="dark-grey"
                    className="text-left font-normal text-xl text-dark-grey flex items-center ml-4"
                  >
                    Akun Saya
                  </p>
                </div>
              </Link>

              <Link href={`/profile/ubah-kata-sandi`} passHref>
                <div
                  id="ubah-kata-sandi"
                  className={`flex flex-row pl-6 py-3 w-full mt-2 ${styles.active}`}
                >
                  <div
                    id="icon"
                    className={
                      'relative h-7 w-7 flex items-center justify-center'
                    }
                  >
                    <Image src="/images/Edit_Active.svg" alt="" layout="fill" />
                  </div>

                  <p
                    color="dark-grey"
                    className="text-left font-normal text-xl text-white flex items-center ml-4 mr-4"
                  >
                    Ubah Kata Sandi
                  </p>
                </div>
              </Link>

              <Link href={`/profile/riwayat-vaksinasi`} passHref>
                <div
                  id="riwayat-vaksin"
                  className={`flex flex-row pl-6 py-3 w-full mt-2 ${styles.container_icon}`}
                >
                  <div
                    id="icon"
                    className={
                      'relative h-7 w-7 flex items-center justify-center'
                    }
                  >
                    <Image src="/images/Riwayat.svg" alt="" layout="fill" />
                  </div>

                  <p
                    color="dark-grey"
                    className="text-left font-normal text-xl flex items-center ml-4 text-dark-grey"
                  >
                    Vaksinasi
                  </p>
                </div>
              </Link>

              <PopUp
                open={keluar}
                onClickBackground={() => setKeluar(false)}
                onClickSimpan={() => setKeluar(false)}
                pertanyaan1={'Apakah Anda yakin ingin'}
                pertanyaan2={'keluar aplikasi?'}
                gambar={'/images/tutup.svg'}
                button_primary={'Iya'}
                button_secondary={'Tidak'}
              />

              <button
                className={`w-full rounded-full py-3 text-xl text-white mt-80 mb-12 ${styles.keluar}`}
                onClick={() => setKeluar(true)}
              >
                Keluar
              </button>
            </div>

            <div
              id="kanan"
              className={`bg-white w-full h-full flex flex-col items-start px-12 pb-12 ${styles.container_kanan}`}
            >
              <PopUp
                open={isOpen}
                onClickBackground={() => setIsOpen(false)}
                onClickSimpan={() => setIsOpen(false)}
                pertanyaan1={'Apakah Anda yakin ingin'}
                pertanyaan2={'menyimpan perubahan?'}
                gambar={'/images/pertanyaan.svg'}
                button_primary={'Simpan'}
                button_secondary={'Tidak'}
              />

              <div
                id="header"
                className="flex flex-row w-full h-full items-center justify-between mt-12"
              >
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Ubah Kata Sandi
                </p>
                <div
                  id="button"
                  className="flex flex-row items-center justify-between gap-8 w-1/3"
                >
                  <Link href={`/profile/akun-saya`} passHref>
                    <button
                      className={`w-full rounded-full py-2 h-full text-l bg-white ${styles.button_batal}`}
                    >
                      Batal
                    </button>
                  </Link>

                  <button
                    className={`w-full rounded-full py-2 h-full text-l text-white bg-purple ${styles.button}`}
                    onClick={() => setIsOpen(true)}
                  >
                    Simpan
                  </button>
                </div>
              </div>

              <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

              <form
                action="#"
                className={`flex flex-col w-full pr-8 ${styles.form}`}
              >
                <div id="kata-sandi-lama" className="flex flex-col">
                  <label
                    htmlFor="lama"
                    className="text-left font-semibold text-l flex items-center text-dark-grey"
                  >
                    Kata Sandi Lama
                  </label>

                  <div className="relative">
                    <input
                      type={showLPassword ? 'text' : 'password'}
                      id="lama"
                      placeholder="Masukkan kata sandi lama"
                      className={`rounded-full w-full text-xl ml-4 ${styles.input}`}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-6"
                      onClick={() => setShowLPassword(!showLPassword)}
                    >
                      {showLPassword ? <EyeHide /> : <EyeShow />}
                    </button>
                  </div>
                </div>

                <div id="kata-sandi-baru" className="flex flex-col mt-6">
                  <label
                    htmlFor="baru"
                    className="text-left font-semibold text-l flex items-center text-dark-grey"
                  >
                    Kata Sandi Baru
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="baru"
                      placeholder="Masukkan kata sandi baru"
                      className={`rounded-full w-full text-xl ml-4 ${styles.input}`}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-6"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeHide /> : <EyeShow />}
                    </button>
                  </div>
                </div>

                <div
                  id="konfirmasi-kata-sandi-baru"
                  className="flex flex-col mt-6"
                >
                  <label
                    htmlFor="konfirmasi-baru"
                    className="text-left font-semibold text-l flex items-center text-dark-grey"
                  >
                    Konfirmasi Kata Sandi Baru
                  </label>
                  <div className="relative">
                    <input
                      type={showCPassword ? 'text' : 'password'}
                      id="konfirmasi-baru"
                      placeholder="Masukkan konfirmasi kata sandi baru"
                      className={`rounded-full w-full text-xl ml-4 ${styles.input}`}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-6"
                      onClick={() => setShowCPassword(!showCPassword)}
                    >
                      {showCPassword ? <EyeHide /> : <EyeShow />}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer color="white" />
      </div>
    </>
  );
}
