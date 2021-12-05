import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/vaksinProfile.module.css";
import Footer from "../../../Components/footer";
import CardHasilVaksin from "../../../Components/card/card-hasil-vaksin";
import PopUp from "../../../Components/pop-up/pop-up";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import uuid from "react-uuid";

export default function UbahKataSandi({ data, user }) {
  const [keluar, setKeluar] = useState(false);
  const router = useRouter();

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
              <div className="flex items-center justify-center w-full">
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey mt-12"
                >
                  {user.nama}
                </p>
              </div>

              <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

              <Link href={`/akun/akun-saya`} passHref>
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

              <Link href={`/akun/ubah-kata-sandi`} passHref>
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

              <Link href={`/akun/riwayat-vaksin`} passHref>
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
                    Riwayat Vaksin
                  </p>
                </div>
              </Link>

              <PopUp
                open={keluar}
                onClickBackground={() => setKeluar(false)}
                onClickBatal={() => setKeluar(false)}
                onClickSimpan={() => {
                  signOut({ redirect: false });
                  router.replace("/");
                  setKeluar(false);
                }}
                pertanyaan1={"Apakah Anda yakin ingin"}
                pertanyaan2={"keluar aplikasi?"}
                gambar={"/images/tutup.svg"}
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
                  Riwayat Vaksin
                </p>
                <div
                  id="button"
                  className="flex flex-row items-center justify-between gap-8 w-1/3"
                >
                  <Link href={`/vaksinasi`} passHref>
                    <button
                      className={`w-full rounded-full py-2 h-full text-l text-purple bg-white ${styles.button}`}
                    >
                      Daftar Vaksinasi
                    </button>
                  </Link>
                </div>
              </div>

              <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

              <div className="flex flex-col items-center gap-12 w-full mt-4">
                {data.map((item) => (
                  <CardHasilVaksin item={item} key={uuid()} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer color="white" />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // var myHeaders = new Headers();
  const baseUrl = process.env.BASE_URL;
  const session = await getSession({ req: context.req });
  const email = session.user.email;
  const response = await fetch(`${baseUrl}api/detail-profile/${email}`);
  const reservasi = await fetch(`${baseUrl}api/reservasi-vaksinasi`);
  const result = await reservasi.json();
  const user = await response.json();

  const data = result.data.filter((item) => item.userId?._id === user.data._id);
  return {
    props: {
      data,
      user: user.data,
    },
  };
}
