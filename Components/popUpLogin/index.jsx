import React from 'react';
import Link from 'next/link';

export default function PopUpLogin({open}) {
  if (open) {
    return (
      <div>
        <div id="background">
          <div className="container">
            <h1>MASUK</h1>
            <form action="#">
              <div id="email">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Masukkan Email" />
              </div>
              <div id="password">
                <label htmlFor="password">Kata Sandi</label>
                <input
                  type="text"
                  id="password"
                  placeholder="Masukkan Kata Sandi"
                />
              </div>
              <input type="button" value="Masuk" />
            </form>
            <h6>
              Belum Memiliki Akun ?<Link href="/">Daftar Sekarang</Link>
            </h6>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
