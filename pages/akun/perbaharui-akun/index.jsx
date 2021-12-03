import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/edit.module.css";
import Footer from "../../../Components/footer";
import PopUp from "../../../Components/pop-up/pop-up";
import { getSession } from "next-auth/client";
import DropDownEdit from "../../../Components/dropDown";
import bulan from "../../../data/Bulan";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";

export default function EditAkun({ user, email }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [keluar, setKeluar] = useState(false);
  const [mountValue, setMountValue] = useState(user.bulan);
  const [formUser, setFormUser] = useState({
    nama: user.nama,
    tanggal: user.tanggal,
    bulan: user.bulan,
    tahun: user.tahun,
    alamat: user.alamat,
  });

  // error
  const [errorNama, setErrorNama] = useState(null);
  const [errorTanggal, setErrorTanggal] = useState(null);
  const [errorBulan, setErrorBulan] = useState(null);
  const [errorTahun, setErrorTahun] = useState(null);
  const [errorAlamat, setErrorAlamat] = useState(null);

  const clearError = () => {
    setErrorNama(null);
    setErrorTanggal(null);
    setErrorBulan(null);
    setErrorTahun(null);
    setErrorAlamat(null);
  };

  const namaCheck = () => {
    if (formUser.nama.length <= 3) {
      setErrorNama("Nama minimal 3 karakter");
    } else if (!/^[a-zA-Z ][a-zA-Z\\s ]+$/.test(formUser.nama)) {
      setErrorNama("Nama hanya boleh huruf");
      console.log(errorNama);
    } else {
      setErrorNama(null);
    }
  };

  const tanggalCheck = () => {
    if (formUser.tanggal === "" || formUser.tanggal === null) {
      setErrorTanggal("Tanggal tidak boleh kosong");
    } else if (formUser.tanggal < 1 || formUser.tanggal > 31) {
      setErrorTanggal("Tanggal tidak valid");
    } else {
      setErrorTanggal(null);
    }
  };

  const bulanCheck = () => {
    if (formUser.bulan === "" || formUser.bulan === null) {
      setErrorBulan("Bulan tidak boleh kosong");
    } else {
      setErrorBulan(null);
    }
  };

  const tahunCheck = () => {
    if (formUser.tahun === "" || formUser.tahun === null) {
      setErrorTahun("Tahun tidak boleh kosong");
    } else if (formUser.tahun < 1900 || formUser.tahun > 2021) {
      setErrorTahun("Tahun tidak valid");
    } else {
      setErrorTahun(null);
    }
  };

  const alamatCheck = () => {
    if (formUser.alamat === "" || formUser.alamat === null) {
      setErrorAlamat("Alamat tidak boleh kosong");
    } else if (formUser.alamat.length < 3 || formUser.alamat.length > 100) {
      setErrorAlamat("Alamat minimal 3 karakter dan maksimal 100 karakter");
    } else {
      setErrorAlamat(null);
    }
  };

  const checkInput = (e) => {
    e.preventDefault();
    namaCheck();
    tanggalCheck();
    bulanCheck();
    tahunCheck();
    alamatCheck();
  };

  let classNameControl;
  if (mountValue === user.bulan) {
    classNameControl = styles.controlDefault;
  } else {
    classNameControl = styles.control;
  }

  let placeholderNama;
  if (formUser.nama === user.nama) {
    placeholderNama = styles.placeHolderDefault;
  } else {
    placeholderNama = styles.placeHolder;
  }

  let placeholderAlamat;
  if (formUser.alamat === user.alamat) {
    placeholderAlamat = styles.placeHolderDefault;
  } else {
    placeholderAlamat = styles.placeHolder;
  }

  let placeholderTanggal;
  if (formUser.tanggal === user.tanggal) {
    placeholderTanggal = styles.placeHolderDefault;
  } else {
    placeholderTanggal = styles.placeHolder;
  }

  let placeholderTahun;
  if (formUser.tahun === user.tahun) {
    placeholderTahun = styles.placeHolderDefault;
  } else {
    placeholderTahun = styles.placeHolder;
  }

  const handleRegister = async (e) => {
    checkInput(e);

    if (
      formUser.nama.length > 3 &&
      !!/^[a-zA-Z ][a-zA-Z\\s ]+$/.test(formUser.nama) &&
      (!(formUser.tanggal === "") || !(formUser.tanggal === null)) &&
      (!(formUser.tanggal < 1) || !(formUser.tanggal > 31)) &&
      (!(formUser.bulan === "") || !(formUser.bulan === null)) &&
      (!(formUser.tahun === "") || !(formUser.tahun === null)) &&
      (!(formUser.tahun < 1900) || !(formUser.tahun > 2021)) &&
      (!(formUser.alamat === "") || !(formUser.alamat === null)) &&
      (!(formUser.alamat.length < 3) || !(formUser.alamat.length > 100))
    ) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        nama: formUser.nama,
        tanggal: formUser.tanggal,
        bulan: formUser.bulan,
        tahun: formUser.tahun,
        alamat: formUser.alamat,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const baseUrl = process.env.BASE_URL;
      const response = await fetch(
        `${baseUrl}api/detail-profile/${email}`,
        requestOptions
      );
      const result = await response.json();

      if (result.success) {
        alert("Berhasil");
        // clearError();
        location.reload();
      } else {
        alert(result.message);
        console.log(result);
      }
    } else {
      checkInput(e);
    }
  };

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

              <Link href={`/profile/riwayat-vaksin`} passHref>
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

              <PopUp
                open={isOpen}
                onClickBackground={() => setIsOpen(false)}
                onClickBatal={() => setIsOpen(false)}
                onClickSimpan={(e) => {
                  setIsOpen(false);
                  handleRegister(e);
                }}
                pertanyaan1={"Apakah Anda yakin ingin"}
                pertanyaan2={"menyimpan perubahan?"}
                gambar={"/images/pertanyaan.svg"}
                button_primary={"Simpan"}
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
                  Perbaharui Akun
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

                  <input
                    type="submit"
                    className={`w-full rounded-full py-2 h-full text-l text-white bg-purple ${styles.button}`}
                    onClick={() => setIsOpen(true)}
                    value="Simpan"
                  />
                </div>
              </div>

              <hr className="h-1 bg-dark-grey w-full mb-6 mt-6 opacity-25" />

              <form
                action="#"
                className={`flex flex-col w-full pl-6 pr-10 ${styles.form}`}
              >
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
                  <label
                    htmlFor="nama-lengkap"
                    className="text-left font-semibold text-l flex items-center text-dark-grey"
                  >
                    Nama Lengkap
                  </label>

                  <input
                    type="text"
                    id="nama-lengkap"
                    defaultValue={user.nama}
                    className={`rounded-full w-full text-xl ml-4 ${styles.input} ${placeholderNama}`}
                    onChange={(e) =>
                      setFormUser({ ...formUser, nama: e.target.value })
                    }
                  />
                  {errorNama && (
                    <p className="mt-2 ml-12 text-red">{errorNama}</p>
                  )}
                </div>

                <div id="tanggal-lahir" className="flex flex-col mt-6">
                  <label
                    htmlFor="tanggal-lahir"
                    className="text-left font-semibold text-l flex items-center text-dark-grey"
                  >
                    Tanggal Lahir
                  </label>
                  <div className="ml-4 flex flex-row items-end justify-center w-full gap-12">
                    <div id="tanggal" className="w-full">
                      <input
                        type="number"
                        id="tanggal"
                        defaultValue={user.tanggal}
                        className={`text-center rounded-full w-full text-xl ${styles.input} ${placeholderTanggal}`}
                        onChange={(e) =>
                          setFormUser({ ...formUser, tanggal: e.target.value })
                        }
                      />
                      {errorTanggal && (
                        <p className="mt-2 ml-12 text-red">{errorTanggal}</p>
                      )}
                    </div>

                    <div id="bulan" className="w-full">
                      <DropDownEdit
                        className={`w-full`}
                        color="white"
                        defaultValue={user.bulan}
                        option={bulan}
                        value={mountValue}
                        onChange={(e) => {
                          setMountValue(e);
                          setFormUser({ ...formUser, bulan: e });
                        }}
                        classNameControl={`${classNameControl}`}
                        classNameArrow={`${styles.arrow}`}
                      />
                      {errorBulan && (
                        <p className="mt-2 ml-12 text-red">{errorBulan}</p>
                      )}
                    </div>

                    <div id="tahun" className="w-full">
                      <input
                        type="number"
                        id="Tahun"
                        defaultValue={user.tahun}
                        className={`rounded-full w-full text-xl text-center ${styles.input} ${placeholderTahun}`}
                        onChange={(e) =>
                          setFormUser({ ...formUser, tahun: e.target.value })
                        }
                      />
                      {errorTahun && (
                        <p className="mt-2 ml-12 text-red">{errorTahun}</p>
                      )}
                    </div>
                  </div>
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

                <div id="alamat-tinggal" className="flex flex-col mt-6">
                  <label
                    htmlFor="alamat"
                    className="text-left font-semibold text-l flex items-center text-dark-grey"
                  >
                    Alamat
                  </label>

                  <input
                    type="text"
                    id="alamat"
                    defaultValue={user.alamat}
                    className={`rounded-full w-full text-xl text-dark-grey ml-4 ${styles.input} ${placeholderAlamat}`}
                    onChange={(e) =>
                      setFormUser({ ...formUser, alamat: e.target.value })
                    }
                  />
                  {errorAlamat && (
                    <p className="mt-2 ml-12 text-red">{errorAlamat}</p>
                  )}
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

export async function getServerSideProps(context) {
  const baseUrl = process.env.BASE_URL;
  const session = await getSession({ req: context.req });
  const email = session.user.email;

  const response = await fetch(`${baseUrl}api/detail-profile/${email}`);
  const result = await response.json();
  return {
    props: {
      user: result.data,
      email: email,
    },
  };
}
