import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../vaksin.module.css";
import Footer from "../../../Components/footer";

export default function UbahKataSandi() {
  const [isOpen, setIsOpen] = useState(false);
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

              <button
                className={`w-full rounded-full py-3 text-xl text-white mt-80 mb-12 ${styles.keluar}`}
              >
                Keluar
              </button>
            </div>

            <div
              id="kanan"
              className={`bg-white w-full h-full flex flex-col items-start px-12 pb-12 ${styles.container_kanan}`}
            >
              <p
                color="dark-grey"
                className="text-center font-semibold text-2xl text-dark-grey mt-12"
              >
                Riwayat Vaksinasi
              </p>

              <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

              <div id="konten"
              className="">

              </div>
            </div>
          </div>
        </section>
        <Footer color="white" />
      </div>
    </>
  );
}
