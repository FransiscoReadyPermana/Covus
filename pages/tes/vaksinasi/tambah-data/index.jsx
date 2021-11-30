import React from "react";
import { useState, useEffect } from "react";
import Footer from "../../../../Components/footer";
import styles from "../../../../styles/signUp.module.css";

export default function TambahData() {
  return (
    <div>
      <section
        id="first"
        className={`${styles.section5} w-full relative pb-20`}
      >
        <div
          id="divider"
          className={`${styles.bgFourthSection} h-52 w-full absolute top-0`}
        />

        <div id="content" className="h-full w-full pl-0 pt-60 bg-white">
          <form action="#" className={`flex flex-col gap-8 ${styles.form}`}>
            <div id="nama">
              <label htmlFor="nama">Nama Lengkap</label>
              <input
                type="text"
                id="nama"
                placeholder="Masukkan Nama Lengkap"
              />
            </div>

            <div id="email">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Masukkan Email" />
            </div>

            <input
              type="submit"
              value="Daftar Sekarang"
              className="bg-purple text-white py-3 rounded-3xl"
            />
          </form>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
