import React from 'react';
import { useState, useEffect } from 'react';
import Headline from '../../Components/headline';
import Title from '../../Components/title';
import styles from './signUp.module.css';
import EyeShow from '../../Components/icons/EyeShow';
import EyeHide from '../../Components/icons/EyeHide';
import Link from 'next/link';
import DropDownEdit from '../../Components/dropDown';
import bulan from '../../data/Bulan';
import Footer from '../../Components/footer';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [mountValue, setMountValue] = useState('');
  const [errorNama, setErrorNama] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorTanggal, setErrorTanggal] = useState('');
  const [errorBulan, setErrorBulan] = useState('');
  const [errorTahun, setErrorTahun] = useState('');
  const [errorJenisKelamin, setErrorJenisKelamin] = useState('');
  const [errorAlamat, setErrorAlamat] = useState('');
  const [errorKataSandi, setErrorKataSandi] = useState('');
  const [errorCKataSandi, setErrorCKataSandi] = useState('');
  const [errorSetuju, setErrorSetuju] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  let placeholderColor;
  let buttonCondition = styles.buttonDisable;
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

  const checkInput = (e) => {
    e.preventDefault();
    console.log(formUser);

    if (formUser.nama < 3) {
      setErrorNama('Nama minimal 3 karakter');
    }

    if (/[^A-Za-z ]/g.test(formUser.nama)) {
      setErrorNama('Nama tidak boleh mengandung angka');
    }

    if (formUser.email === '' || formUser.email === null) {
      setErrorEmail('Email tidak boleh kosong');
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formUser.email)) {
      setErrorEmail('Email tidak valid');
    }

    if (formUser.tanggal === '' || formUser.tanggal === null) {
      setErrorTanggal('Tanggal tidak boleh kosong');
    }

    if (formUser.tanggal < 1 || formUser.tanggal > 31) {
      setErrorTanggal('Tanggal tidak valid');
    }

    if (formUser.bulan === '' || formUser.bulan === null) {
      setErrorBulan('Bulan tidak boleh kosong');
    }

    if (formUser.tahun === '' || formUser.tahun === null) {
      setErrorTahun('Tahun tidak boleh kosong');
    }

    if (formUser.tahun < 1900 || formUser.tahun > 2020) {
      setErrorTahun('Tahun tidak valid');
    }

    if (formUser.jenisKelamin === '' || formUser.jenisKelamin === null) {
      setErrorJenisKelamin('Jenis Kelamin tidak boleh kosong');
    }

    if (formUser.alamat === '' || formUser.alamat === null) {
      setErrorAlamat('Alamat tidak boleh kosong');
    }

    if (formUser.alamat < 3 || formUser.alamat > 100) {
      setErrorAlamat('Alamat minimal 3 karakter dan maksimal 100 karakter');
    }

    if (formUser.kataSandi === '' || formUser.kataSandi === null) {
      setErrorKataSandi('Kata Sandi tidak boleh kosong');
    }

    if (formUser.kataSandi < 8 || formUser.kataSandi > 20) {
      setErrorKataSandi(
        'Kata Sandi minimal 8 karakter dan maksimal 20 karakter'
      );
    }

    if (formUser.CKataSandi === '' || formUser.CKataSandi === null) {
      setErrorCKataSandi('Konfirmasi Kata Sandi tidak boleh kosong');
    }

    if (formUser.CKataSandi !== formUser.kataSandi) {
      setErrorKataSandi('Kata Sandi tidak sama');
      setErrorCKataSandi('Kata Sandi tidak sama');
    }

    if (formUser.setuju === false || formUser.setuju === null) {
      setErrorSetuju('Anda harus setuju dengan syarat dan ketentuan');
    }

    // setErrorNama('');
    // setErrorEmail('');
    // setErrorTanggal('');
    // setErrorBulan('');
    // setErrorTahun('');
    // setErrorJenisKelamin('');
    // setErrorAlamat('');
    // setErrorKataSandi('');
    // setErrorCKataSandi('');
    // setErrorSetuju('');
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

    const response = fetch(
      'http://localhost:3000/api/auth/register',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    
    const result = await response.JSON;
    console.log("ini result: "+ result);
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
          <Headline className="text-center text-dark-grey">
            Daftar Sekarang
          </Headline>
          <Title className={`text-center text-dark-grey mt-7 ${styles.title}`}>
            Buat Akun Covus untuk Pendaftaran Vaksinasi Covid-19
          </Title>
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
                id="email"
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
                  id="password"
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
              {errorSetuju && (
                <p className="mt-2 ml-2 text-red">{errorSetuju}</p>
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
