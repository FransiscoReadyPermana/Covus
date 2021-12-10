import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from './popUpLogin.module.css';
import Close from '../icons/Close';
import EyeShow from '../icons/EyeShow';
import EyeHide from '../icons/EyeHide';
import { signIn } from 'next-auth/client';

export default function PopUpLogin({
  open,
  onClick,
  onClickBackground,
  onClickDaftar,
}) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formUser, setFormUser] = useState({
    email: '',
    kataSandi: '',
  });
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorKataSandi, setErrorKataSandi] = useState(null);

  const clear = () => {
    setFormUser({
      email: '',
      kataSandi: '',
    });
    setErrorEmail(null);
    setErrorKataSandi(null);
  };

  const inputCheck = () => {
    let isValid = true;

    if (formUser.email === '' || formUser.email === null) {
      setErrorEmail('Email tidak boleh kosong');
      isValid = false;
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formUser.email)
    ) {
      setErrorEmail('Email tidak valid');
      isValid = false;
    }

    if (formUser.kataSandi === '' || formUser.kataSandi === null) {
      setErrorKataSandi('Kata Sandi tidak boleh kosong');
      isValid = false;
    } else {
      setErrorKataSandi(null);
      setErrorEmail(null);
      isValid = true;
    }

    return isValid;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const isValid = inputCheck();

    if (isValid) {
      const response = await signIn('credentials', {
        redirect: false,
        email: formUser.email,
        kataSandi: formUser.kataSandi,
      });

      if (!response.error) {
        router.replace('/');
        alert('Berhasil Login');
        
      } else {
        clear();
        alert(response.error);
      }
    } else {
      console.log('error');
    }
  };

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
        className={`fixed bg-white px-20 ${style.container}`}
      >
        <button
          className={`fixed right-8 top-8 rounded-full ${style.close}`}
          onClick={onClick}
        >
          <Close />
        </button>
        <h1 className={`text-center text-dark-grey mb-6 ${style.judul}`}>
          MASUK
        </h1>
        <form action="#" className={`flex flex-col gap-6 ${style.form}`}>
          <div id="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Masukkan Email"
              value={formUser.email}
              onChange={(e) => {
                setFormUser({ ...formUser, email: e.target.value });
              }}
            />
            {errorEmail && <p className="mt-2 ml-2 text-red">{errorEmail}</p>}
          </div>
          <div id="password">
            <label htmlFor="password">Kata Sandi</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Masukkan Kata Sandi"
                value={formUser.kataSandi}
                onChange={(e) =>
                  setFormUser({ ...formUser, kataSandi: e.target.value })
                }
              />
              <button
                className={`absolute ${style.eye}`}
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? <EyeHide /> : <EyeShow />}
              </button>
            </div>
            {errorKataSandi && (
              <p className="mt-2 ml-2 text-red">{errorKataSandi}</p>
            )}
          </div>
          <input
            type="submit"
            value="Masuk"
            className={`bg-purple text-white py-3 rounded-3xl`}
            onClick={(e) => {
              handleSignIn(e);
            }}
          />
        </form>
        <h6 className={`mt-4 text-center font-semibold ${style.text}`}>
          Belum Memiliki Akun?
          <span className="text-purple">
            <button onClick={onClickDaftar} className="ml-2">Daftar Sekarang</button>
          </span>
        </h6>
      </div>
    </>
  );
}
