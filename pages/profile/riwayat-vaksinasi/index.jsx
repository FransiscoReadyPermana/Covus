import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../vaksin.module.css";
import Footer from "../../../Components/footer";
import CardHasilVaksin from "../../../Components/card/card-hasil-vaksin";
import PopUp from "../../../Components/pop-up/pop-up";

export default function UbahKataSandi() {
  const [keluar, setKeluar] = useState(false);

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
                    <Image src="/images/Profile.svg" alt="" layout="fill" />
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
                  className={`flex flex-row pl-6 py-3 w-full mt-2 ${styles.container_icon}`}
                >
                  <div
                    id="icon"
                    className={
                      "relative h-7 w-7 flex items-center justify-center"
                    }
                  >
                    <Image src="/images/Edit.svg" alt="" layout="fill" />
                  </div>

                  <p
                    color="dark-grey"
                    className="text-left font-normal text-xl text-dark-grey flex items-center ml-4 mr-4"
                  >
                    Ubah Kata Sandi
                  </p>
                </div>
              </Link>

              <Link href={`/profile/riwayat-vaksinasi`} passHref>
                <div
                  id="riwayat-vaksin"
                  className={`flex flex-row pl-6 py-3 w-full mt-2 ${styles.active}`}
                >
                  <div
                    id="icon"
                    className={
                      "relative h-7 w-7 flex items-center justify-center"
                    }
                  >
                    <Image
                      src="/images/Riwayat_Active.svg"
                      alt=""
                      layout="fill"
                    />
                  </div>

                  <p
                    color="dark-grey"
                    className="text-left font-normal text-xl flex items-center ml-4 text-white"
                  >
                    Vaksinasi
                  </p>
                </div>
              </Link>

              <PopUp
                open={keluar}
                onClickBackground={() => setKeluar(false)}
                onClickSimpan={() => setKeluar(false)}
                pertanyaan1={"Apakah Anda yakin ingin"}
                pertanyaan2={"keluar aplikasi?"}
                gambar={"/images/Close.svg"}
                button_primary={"Iya"}
                button_secondary={"Tidak"}
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
              <div
                id="header"
                className="flex flex-row w-full h-full items-center justify-between mt-12"
              >
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Riwayat Vaksinasi
                </p>
                <div
                  id="button"
                  className="flex flex-row items-center justify-between gap-8 w-1/3"
                >
                  <button
                    className={`w-full rounded-full py-2 h-full text-l text-purple bg-white ${styles.button}`}
                  >
                    Daftar Vaksinasi
                  </button>
                </div>
              </div>

              <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

              <div className="flex flex-col items-center gap-12 w-full mt-4">
                <CardHasilVaksin />
                <CardHasilVaksin />
                <CardHasilVaksin />
              </div>
            </div>
          </div>
        </section>
        <Footer color="white" />
      </div>
    </>
  );
}
