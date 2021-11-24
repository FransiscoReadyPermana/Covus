import React from "react";
import Image from "next/image";
import Title from "../../Components/title";
import Paragraph from "../../Components/paragraph";
import styles from "./about.module.css";
import Footer from "../../Components/footer";
import TableData from "../../Components/table";

export default function RSRujukan({ hospitals }) {
  return (
    <div className="pt-20">
      <section
        id="first"
        className={`${styles.section1} w-full relative bg-purple mt-28`}
      >
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40`}
        />
        <div
          id="content"
          className="flex gap-16 h-full px-64 pt-10 bg-purple pb-10"
        >
          <div className="flex flex-col gap-4 items-center w-full">
            <Title color="white">TENTANG KAMI</Title>
            <Paragraph size="2xl" color="white" className="text-center">
              Covus merupakan aplikasi berbasis website yang memberikan
              informasi seputar jumlah aktifitas virus COVID-19 di Indonesia
              serta menyediakan rujukan rumah sakit penanganannya dan vaksinasi.
            </Paragraph>
          </div>
        </div>
      </section>

      <section id="second" className={`w-full relative bg-purple mt-32 mb-36`}>
        <div
          id="divider"
          className={`${styles.bgThirdSection} h-52 w-full absolute -top-32`}
        />
        <div
          id="content"
          className="flex flex-col gap-8 h-full px-52 pt-24 bg-white"
        >
          <Title className="text-center" color="dark-grey">
            MEET OUR TEAM
          </Title>

          <div className="flex flex-row items-center w-full h-3/4">
            <div id="team" className="flex flex-col w-full h-full items-center">
              <div className="relative w-96 h-96 top-0">
                <Image src="/images/Gito.svg" alt="" layout="fill" />
              </div>

              <p className="font-semibold text-xl text-center mt-4 bg-dark-grey text-white w-80 py-3 rounded-full">
                Gito Putro Wardana
              </p>
            </div>

            <div id="team" className="flex flex-col w-full h-full items-center">
              <div className="relative w-96 h-96 top-0">
                <Image src="/images/Gito.svg" alt="" layout="fill" />
              </div>

              <p className="font-semibold text-xl text-center mt-4 bg-dark-grey text-white w-80 py-3 rounded-full">
                Fransisco Ready Permana
              </p>
            </div>

            <div id="team" className="flex flex-col w-full h-full items-center">
              <div className="relative w-96 h-96 top-0">
                <Image src="/images/Kemmy.svg" alt="" layout="fill" />
              </div>

              <p className="font-semibold text-xl text-center mt-4 bg-dark-grey text-white w-80 py-3 rounded-full">
                Raihan Kemmy R
              </p>
            </div>
          </div>

          <div className="flex flex-row items-center w-full h-3/4 mt-12 px-36">
            <div id="team" className="flex flex-col w-full h-full items-center">
              <div className="relative w-96 h-96 top-0">
                <Image src="/images/Gito.svg" alt="" layout="fill" />
              </div>

              <p className="font-semibold text-xl text-center mt-4 bg-dark-grey text-white w-80 py-3 rounded-full">
                Ariansyah Arifin
              </p>
            </div>

            <div id="team" className="flex flex-col w-full h-full items-center">
              <div className="relative w-96 h-96 top-0">
                <Image src="/images/Kemmy.svg" alt="" layout="fill" />
              </div>

              <p className="font-semibold text-xl text-center mt-4 bg-dark-grey text-white w-80 py-3 rounded-full">
                Ahmadien Hafizh Yusufi
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
