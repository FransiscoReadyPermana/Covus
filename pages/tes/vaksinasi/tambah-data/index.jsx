import React from 'react';
import { useState, useEffect } from 'react';
import Headline from '../../../../components/Headline';
import Title from '../../../../Components/title';
import styles from '../../../../styles/signUp.module.css';
import EyeShow from '../../../../Components/icons/EyeShow';
import EyeHide from '../../../../Components/icons/EyeHide';
import Link from 'next/link';
import DropDownEdit from '../../../../Components/dropDown';
import bulan from '../../../../data/Bulan';
import Footer from '../../../../Components/footer';

export default function TambahData() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [mountValue, setMountValue] = useState('');
  const [errorNama, setErrorNama] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorTanggal, setErrorTanggal] = useState(null);
  const [errorBulan, setErrorBulan] = useState(null);
  const [errorTahun, setErrorTahun] = useState(null);
  const [errorJenisKelamin, setErrorJenisKelamin] = useState(null);
  const [errorAlamat, setErrorAlamat] = useState(null);
  const [errorKataSandi, setErrorKataSandi] = useState(null);
  const [errorCKataSandi, setErrorCKataSandi] = useState(null);
  const [errorSetuju, setErrorSetuju] = useState(null);

  let placeholderColor;
  if (mountValue === '') {
    placeholderColor = styles.placeHolderDefault;
  } else {
    placeholderColor = styles.placeHolder;
  }

  const [formUser, setFormUser] = useState({
    nama: '',
    email: '',
    tanggal: '',
    bulan: '',
    tahun: '',
    jenisKelamin: '',
    alamat: '',
    kataSandi: '',
    CKataSandi: '',
    setuju: false,
  });

  const clearError = () => {
    setErrorNama(null);
    setErrorEmail(null);
    setErrorTanggal(null);
    setErrorBulan(null);
    setErrorTahun(null);
    setErrorJenisKelamin(null);
    setErrorAlamat(null);
    setErrorKataSandi(null);
    setErrorCKataSandi(null);
    setErrorSetuju(null);
  };

  const namaCheck = () => {
    if (formUser.nama.length < 3) {
      setErrorNama('Nama minimal 3 karakter');
    } else if (!/^[a-zA-Z ][a-zA-Z\\s ]+$/.test(formUser.nama)) {
      setErrorNama('Nama hanya boleh huruf');
    } else {
      setErrorNama(null);
    }
  };

  const emailCheck = () => {
    if (formUser.email === '' || formUser.email === null) {
      setErrorEmail('Email tidak boleh kosong');
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formUser.email)
    ) {
      setErrorEmail('Email tidak valid');
    } else {
      setErrorEmail(null);
    }
  };

  const tanggalCheck = () => {
    if (formUser.tanggal === '' || formUser.tanggal === null) {
      setErrorTanggal('Tanggal tidak boleh kosong');
    } else if (formUser.tanggal < 1 || formUser.tanggal > 31) {
      setErrorTanggal('Tanggal tidak valid');
    } else {
      setErrorTanggal(null);
    }
  };

  const bulanCheck = () => {
    if (formUser.bulan === '' || formUser.bulan === null) {
      setErrorBulan('Bulan tidak boleh kosong');
    } else {
      setErrorBulan(null);
    }
  };

  const tahunCheck = () => {
    if (formUser.tahun === '' || formUser.tahun === null) {
      setErrorTahun('Tahun tidak boleh kosong');
    } else if (formUser.tahun < 1900 || formUser.tahun > 2021) {
      setErrorTahun('Tahun tidak valid');
    } else {
      setErrorTahun(null);
    }
  };

  const jenisKelaminCheck = () => {
    if (formUser.jenisKelamin === '' || formUser.jenisKelamin === null) {
      setErrorJenisKelamin('Jenis Kelamin tidak boleh kosong');
    } else {
      setErrorJenisKelamin(null);
    }
  };

  const alamatCheck = () => {
    if (formUser.alamat === '' || formUser.alamat === null) {
      setErrorAlamat('Alamat tidak boleh kosong');
    } else if (formUser.alamat.length < 3 || formUser.alamat.length > 100) {
      setErrorAlamat('Alamat minimal 3 karakter dan maksimal 100 karakter');
    } else {
      setErrorAlamat(null);
    }
  };

  const kataSandiCheck = () => {
    if (formUser.kataSandi === '' || formUser.kataSandi === null) {
      setErrorKataSandi('Kata Sandi tidak boleh kosong');
    } else if (
      formUser.kataSandi.length < 8 ||
      formUser.kataSandi.length > 20
    ) {
      setErrorKataSandi(
        'Kata Sandi minimal 8 karakter dan maksimal 20 karakter'
      );
    } else if (formUser.CKataSandi === '' || formUser.CKataSandi === null) {
      setErrorCKataSandi('Konfirmasi Kata Sandi tidak boleh kosong');
    } else if (formUser.CKataSandi !== formUser.kataSandi) {
      setErrorKataSandi('Kata Sandi tidak sama');
      setErrorCKataSandi('Kata Sandi tidak sama');
    } else {
      setErrorKataSandi(null);
      setErrorCKataSandi(null);
    }
  };

  const setujuCheck = () => {
    if (formUser.setuju === false) {
      setErrorSetuju('Anda harus menyetujui syarat dan ketentuan');
    } else {
      setErrorSetuju(null);
    }
  };

  const checkInput = (e) => {
    e.preventDefault();
    console.log(formUser);
    namaCheck();
    emailCheck();
    tanggalCheck();
    bulanCheck();
    tahunCheck();
    jenisKelaminCheck();
    alamatCheck();
    kataSandiCheck();
    setujuCheck();
  };

  const handleRegister = async (e) => {
    checkInput(e);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      nama: formUser.nama,
      email: formUser.email,
      tanggal: formUser.tanggal,
      bulan: formUser.bulan,
      tahun: formUser.tahun,
      jenisKelamin: formUser.jenisKelamin,
      alamat: formUser.alamat,
      kataSandi: formUser.kataSandi,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const baseUrl = process.env.BASE_URL;

    const response = await fetch(`${baseUrl}api/auth/register`, requestOptions);
    const result = await response.json();

    if (result.success) {
      alert('Register Berhasil');
      clearError();
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } else {
      alert(result.message);
      console.log(result);
    }
  };

  return (
    <div>
      <section
        id="fifth"
        className={`${styles.section5} w-full relative pb-20`}
      >
        <div
          id="divider"
          className={`${styles.bgFourthSection} h-52 w-full absolute top-0`}
        />

        <div id="content" className="h-full w-full pl-0 pt-60 bg-white">
          <Headline className="text-center text-dark-grey mb-8">
            Tambah Data Lokasi Vaksinasi
          </Headline>
          <form action="#" className={`flex flex-col gap-8 ${styles.form}`}>
            <div id="nama">
              <label htmlFor="nama">Nama Lengkap</label>
              <input
                type="text"
                id="nama"
                placeholder="Masukkan Nama Lengkap"
                onChange={(e) =>
                  setFormUser({ ...formUser, nama: e.target.value })
                }
              />
              {errorNama && <p className="mt-2 ml-2 text-red">{errorNama}</p>}
            </div>
            <div id="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Masukkan Email"
                onChange={(e) =>
                  setFormUser({ ...formUser, email: e.target.value })
                }
              />
              {errorEmail && <p className="mt-2 ml-2 text-red">{errorEmail}</p>}
            </div>
            <div id="tanggal" className="flex flex-col">
              <label htmlFor="tanggal">Tanggal Lahir</label>
              <div className="flex gap-28 items-end">
                <div id="tanggal" className="w-full">
                  <input
                    type="number"
                    id="tanggal"
                    placeholder="Tanggal"
                    onChange={(e) =>
                      setFormUser({ ...formUser, tanggal: e.target.value })
                    }
                  />

                  {errorTanggal && (
                    <p className="mt-2 ml-2 text-red">{errorTanggal}</p>
                  )}
                </div>

                <div id="bulan" className="w-full">
                  <DropDownEdit
                    className={`w-full`}
                    color="white"
                    placeholder="Bulan"
                    option={bulan}
                    value={mountValue}
                    onChange={(e) => {
                      setMountValue(e);
                      setFormUser({ ...formUser, bulan: e });
                    }}
                    classNameControl={`${styles.control}`}
                    classNameArrow={`${styles.arrow}`}
                    placeholderClassName={`${placeholderColor}`}
                  />

                  {errorBulan && (
                    <p className="mt-2 ml-2 text-red">{errorBulan}</p>
                  )}
                </div>

                <div id="tahun" className="w-full">
                  <input
                    type="number"
                    id="Tahun"
                    placeholder="Tahun"
                    onChange={(e) =>
                      setFormUser({ ...formUser, tahun: e.target.value })
                    }
                  />
                  {errorTahun && (
                    <p className="mt-2 ml-2 text-red">{errorTahun}</p>
                  )}
                </div>
              </div>
            </div>
            <div id="jenis kelamin">
              <label htmlFor="jenis kelamin">Jenis Kelamin</label>
              <div className="flex gap-8 ml-8 mt-5">
                <div id="Male" className="flex items-center">
                  <input
                    type="radio"
                    id="laki"
                    name="jenis kelamin"
                    value="laki-laki"
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisKelamin: e.target.value })
                    }
                  />
                  <label htmlFor="laki">Laki-laki</label>
                </div>
                <div id="Female" className="flex items-center">
                  <input
                    type="radio"
                    id="perempuan"
                    name="jenis kelamin"
                    value="perempuan"
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisKelamin: e.target.value })
                    }
                  />
                  <label htmlFor="perempuan">Perempuan</label>
                </div>
                <div id="Other" className="flex items-center">
                  <input
                    type="radio"
                    id="lainnya"
                    name="jenis kelamin"
                    value="lainnya"
                    onChange={(e) =>
                      setFormUser({ ...formUser, jenisKelamin: e.target.value })
                    }
                  />
                  <label htmlFor="lainnya">Lainnya</label>
                </div>
              </div>
              {errorJenisKelamin && (
                <p className="mt-2 ml-2 text-red">{errorJenisKelamin}</p>
              )}
            </div>
            <div id="alamat">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="alamat"
                placeholder="Masukkan Alamat Lengkap"
                onChange={(e) =>
                  setFormUser({ ...formUser, alamat: e.target.value })
                }
              />
              {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )}
            </div>
            <div id="password">
              <label htmlFor="password">Kata Sandi</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                  onChange={(e) =>
                    setFormUser({ ...formUser, kataSandi: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-4 top-6"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeHide /> : <EyeShow />}
                </button>
              </div>
              {errorKataSandi && (
                <p className="mt-2 ml-2 text-red">{errorKataSandi}</p>
              )}
            </div>
            <div id="Cpassword">
              <label htmlFor="Cpassword">Konfirmasi Kata Sandi</label>
              <div className="relative">
                <input
                  type={showPassword2 ? 'text' : 'password'}
                  id="Cpassword"
                  placeholder="Masukkan Kata Sandi"
                  onChange={(e) =>
                    setFormUser({ ...formUser, CKataSandi: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-4 top-6"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? <EyeHide /> : <EyeShow />}
                </button>
              </div>
              {errorCKataSandi && (
                <p className="mt-2 ml-2 text-red">{errorCKataSandi}</p>
              )}
            </div>
            <div id="sk2">
              <div id="sk" className="flex items-center">
                <input
                  type="checkbox"
                  id="radio"
                  className={`${styles.radio}`}
                  onChange={(e) =>
                    setFormUser({ ...formUser, setuju: e.target.checked })
                  }
                />
                <label htmlFor="radio">
                  Dengan ini saya telah menyetujui
                  <span className="text-purple">
                    <Link href="/"> Syarat dan Ketentuan </Link>
                  </span>
                  yang berlaku
                </label>
              </div>
              {errorSetuju && (
                <p className="mt-2 ml-8 text-red">{errorSetuju}</p>
              )}
            </div>
            <input
              type="submit"
              value="Daftar Sekarang"
              className="bg-purple text-white py-3 rounded-3xl"
              onClick={(e) => {
                handleRegister(e);
              }}
            />
          </form>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
