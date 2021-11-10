import React from 'react';
import { useState } from 'react';
import Headline from '../../Components/headline';
import Title from '../../Components/title';
import styles from './signUp.module.css';
import EyeShow from '../../Components/icons/EyeShow';
import EyeHide from '../../Components/icons/EyeHide';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <section id="fifth" className={`${styles.section5} w-full relative`}>
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
                id="email"
                placeholder="Masukkan Nama Lengkap"
              />
            </div>
            <div id="email">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Masukkan Email" />
            </div>
            <div id="tanggal" className="flex flex-col">
              <label htmlFor="tanggal">Tanggal Lahir</label>
              <div className="flex">
                <input type="number" id="tanggal" placeholder="Tanggal" />
                <select id="cars" name="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
                <input type="number" id="tanggal" placeholder="Tahun" />
              </div>
            </div>
            <div id="alamat">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="email"
                placeholder="Masukkan Alamat Lengkap"
              />
            </div>
            <div id="password">
              <label htmlFor="password">Kata Sandi</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                />
                <button
                  className="absolute right-4 top-6"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeHide /> : <EyeShow />}
                </button>
              </div>
            </div>
            <div id="Cpassword">
              <label htmlFor="Cpassword">Konfirmasi Kata Sandi</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                />
                <button
                  className="absolute right-4 top-6"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeHide /> : <EyeShow />}
                </button>
              </div>
            </div>
            <div id="sk" className="flex items-center">
              <input type="radio" id="radio" />
              <label htmlFor="radio">
                Dengan ini saya telah menyetujui Syarat dan Ketentuan yang
                berlaku
              </label>
            </div>
            <input
              type="submit"
              value="Daftar Sekarang"
              className="bg-purple text-white py-3 rounded-3xl"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
