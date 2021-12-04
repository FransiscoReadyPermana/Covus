import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./admin.module.css";
import Title from "../../Components/title";
import Footer from "../../Components/footer";
import Card from "../../Components/card";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();
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
          className="flex flex-col items-center h-full px-64 pt-80 bg-white pb-16"
        >
          <Title color="dark-grey">PENGELOLAAN COVUS</Title>
          <div
            id="card containter"
            className="w-full h-full flex flex-row justify-center items-center gap-16"
          >
            <button
              onClick={() => router.push("/tes/vaksinasi")}
              className="w-1/4"
            >
              <Card type="big" className={`w-full h-full ${styles.card}`}>
                <div className="relative h-3/4 w-full flex flex-col mt-8">
                  <Image
                    src="/images/vaksinasi.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Vaksinasi
                </p>
              </Card>
            </button>

            <button
              onClick={() => router.push("/tes/rs-rujukan")}
              className="w-1/4"
            >
              <Card type="big" className={`w-full h-full ${styles.card}`}>
                <div className="relative h-3/4 w-full flex flex-col mt-8">
                  <Image
                    src="/images/rumah_sakit.svg"
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
            </button>
          </div>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
