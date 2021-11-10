import React from 'react';
import Link from 'next/link';
import style from './popUpLogin.module.css'
import Close from '../icons/Close';

export default function PopUpLogin({open, onClick}) {
  if (!open) {
    return null;
  }
  return (
    <div id="background" className={`absolute h-screen w-screen flex items-center justify-center z-20 top-0 left-0 ${style.background}`}>
      <div className="container" className={`relative bg-white py-10 px-20 ${style.container}`}>
        <button className={`absolute right-8 top-8 rounded-full ${style.close}`} onClick={onClick}>
          <Close/>
        </button>
        <h1 className={`text-center text-dark-grey mb-6 ${style.judul}`}>MASUK</h1>
        <form action="#" className={`flex flex-col gap-6 ${style.form}`}>
          <div id="email">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Masukkan Email" />
          </div>
          <div id="password">
            <label htmlFor="password">Kata Sandi</label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan Kata Sandi"
            />
          </div>
          <input type="submit" value="Masuk" className="bg-purple text-white py-3 rounded-3xl"/>
        </form>
        <h6 className={`mt-4 text-center font-semibold ${style.text}`}>
          Belum Memiliki Akun? <span className="text-purple"><Link href="/vaksinasi">Daftar Sekarang</Link></span> 
        </h6>
      </div>
    </div>
  );
}
