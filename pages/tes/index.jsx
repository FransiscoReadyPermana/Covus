import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./admin.module.css";
import Title from "../../Components/title";
import Button from "../../Components/button";
import Footer from "../../Components/footer";
import Card from "../../Components/card";


export default function Admin() {
  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`${styles.section1} w-full relative mb-16`}
      >
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className="flex flex-col items-center h-full px-64 pt-72 bg-white pb-16"
        >
          <Title color="dark-grey">PENGELOLAAN COVUS</Title>
          <div
            id="card containter"
            className="w-full h-full flex justify-center items-center gap-16 mt-10"
          >
            <Card type="big" className={`${styles.card}`}>
              <div className="relative h-3/4 w-full flex flex-col">
                <Image
                  src="/images/SesakNafas.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>
              <p
                color="dark-grey"
                className="text-center font-semibold text-2xl text-dark-grey"
              >
                Daftar Vaksinasi
              </p>
            </Card>
            <Card type="big" className={`${styles.card}`}>
              <div className="relative h-3/4 w-full flex flex-col">
                <Image
                  src="/images/BatukKering.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>
              <p
                color="dark-grey"
                className="text-center font-semibold text-2xl text-dark-grey"
              >
                RS Rujukan
              </p>
            </Card>
            <Card type="big" className={`${styles.card}`}>
              <div className="relative h-3/4 w-full flex flex-col">
                <Image
                  src="/images/Lelah.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>
              <p
                color="dark-grey"
                className="text-center font-semibold text-2xl text-dark-grey"
              >
                Peserta Vaksinasi
              </p>
            </Card>
          </div>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
