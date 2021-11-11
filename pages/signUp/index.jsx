import React from 'react';
import { useState } from 'react';
import Headline from '../../Components/headline';
import Title from '../../Components/title';
import styles from './signUp.module.css';
import EyeShow from '../../Components/icons/EyeShow';
import EyeHide from '../../Components/icons/EyeHide';
import Link from 'next/link';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [mountValue, setMountValue] = useState('');

  const handleChange = (e) => {
    setMountValue(e.target.value);
  };

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
              <div className="flex gap-4 items-end">
                <input type="number" id="tanggal" placeholder="Tanggal" />
                <select value={mountValue} onChange={handleChange} className={`${styles.select}`}>
                  <option value="Januari">Januari</option>
                  <option value="Februari">Februari</option>
                  <option value="Maret">Maret</option>
                  <option value="April">April</option>
                  <option value="Mei">Mei</option>
                  <option value="Juni">Juni</option>
                  <option value="Juli">Juli</option>
                  <option value="Agustus">Agustus</option>
                  <option value="September">September</option>
                  <option value="November">November</option>
                  <option value="Desember">Desember</option>
                </select>
                <input type="number" id="Tahun" placeholder="Tahun" />
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
                  type={showPassword2 ? 'text' : 'password'}
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                />
                <button
                  className="absolute right-4 top-6"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? <EyeHide /> : <EyeShow />}
                </button>
              </div>
            </div>
            <div id="sk" className="flex items-center">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                Dengan ini saya telah menyetujui
                <span className="text-purple">
                  <Link href="#"> Syarat dan Ketentuan </Link>{' '}
                </span>
                yang berlaku
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
