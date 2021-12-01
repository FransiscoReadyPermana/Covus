import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/akun.module.css";
import Footer from "../../../Components/footer";
import PopUp from "../../../Components/pop-up/pop-up";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { data } from "autoprefixer";

export default function AkunSaya({ user }) {
  const [keluar, setKeluar] = useState(false);
  const router = useRouter();
  return (
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

            <Link href={`/profile/akun-saya`} passHref>
              <div
                id="akun"
                className={`flex flex-row pl-6 py-3 w-full ${styles.active}`}
              >
                <div
                  id="icon"
                  className={`relative h-7 w-7 flex items-center justify-center`}
                >
                  <Image
                    src="/images/Profile_Active.svg"
                    alt=""
                    layout="fill"
                  />
                </div>

                <p
                  color="dark-grey"
                  className="text-left font-normal text-xl text-white flex items-center ml-4"
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
                className={`flex flex-row pl-6 py-3 w-full mt-2 ${styles.container_icon}`}
              >
                <div
                  id="icon"
                  className={
                    "relative h-7 w-7 flex items-center justify-center"
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
              className={`w-full rounded-full py-3 text-xl text-white bg-purple mt-80 mb-12 ${styles.keluar}`}
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
                Akun Saya
              </p>
              <div
                id="button"
                className="flex flex-row items-center justify-between gap-8 w-1/3"
              >
                <Link href={`/profile/perbaharui-akun`} passHref>
                  <button
                    className={`w-full rounded-full py-2 h-full text-l text-white bg-purple ${styles.button}`}
                  >
                    Perbaharui Akun
                  </button>
                </Link>
              </div>
            </div>

            <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />
            <div id="container" className="w-full px-6">
              <div id="email" className="flex flex-col">
                <p
                  color="dark-grey"
                  className="text-left font-semibold text-l flex items-center text-dark-grey"
                >
                  Email
                </p>

                <p
                  color="dark-grey"
                  className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey"
                >
                  {user.email}
                </p>
              </div>

              <div id="nama" className="flex flex-col mt-6">
                <p
                  color="dark-grey"
                  className="text-left font-semibold text-l flex items-center text-dark-grey"
                >
                  Nama Lengkap
                </p>

                <p
                  color="dark-grey"
                  className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey"
                >
                  {user.nama}
                </p>
              </div>

              <div id="tanggal-lahir" className="flex flex-col mt-6">
                <p
                  color="dark-grey"
                  className="text-left font-semibold text-l flex items-center text-dark-grey"
                >
                  Tanggal Lahir
                </p>

                <p
                  color="dark-grey"
                  className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey"
                >
                  {user.tanggal} {user.bulan} {user.tahun}
                </p>
              </div>

              <div id="jenis-kelamin" className="flex flex-col mt-6">
                <p
                  color="dark-grey"
                  className="text-left font-semibold text-l flex items-center text-dark-grey"
                >
                  Jenis Kelamin
                </p>

                <p
                  color="dark-grey"
                  className="text-left font-normal text-xl flex items-center mt-2 ml-4 text-dark-grey"
                >
                  {user.jenisKelamin}
                </p>
              </div>

              <div id="alamat" className="flex flex-col mt-6">
                <p
                  color="dark-grey"
                  className="text-left font-semibold text-l flex items-center text-dark-grey"
                >
                  Alamat
                </p>

                <p
                  color="dark-grey"
                  className="text-left font-normal text-xl flex items-center mt-2 ml-4 mr-8 text-dark-grey text-justify"
                >
                  {user.alamat}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer color="white" />
    </div>
  );
}

export async function getServerSideProps(context) {
  // var myHeaders = new Headers();
  const baseUrl = process.env.BASE_URL;
  const session = await getSession({ req: context.req });
  const email = session.user.email;

  const response = await fetch(`${baseUrl}api/detail-profile/${email}`);
  const result = await response.json();

  console.log(result);

  return {
    props: {
      user: result.data,
    },
  };
}
