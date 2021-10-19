import React from "react";
import Image from "next/image";
import styles from "./vaksin.module.css";
import Title from "../../Components/title";
import Paragraph from "../../Components/paragraph";
import Button from "../../Components/button";
import Footer from "../../Components/footer";
import formatK from "../../utils/format";
import Card from '../../Components/card';

export default function Vaksinasi() {
  return (
    <div className="h-screen w-full">
      <section id="fifth" className={`${styles.section5} w-full relative`}>
        <div
          id="divider"
          className={`${styles.bgFourthSection} h-52 w-full absolute top-0`}
        />

        <div id="content" className="flex h-full pr-48 pl-0 pt-32 bg-white">
          <div className="relative w-3/6 h-4/6 -z-10 top-32">
            <Image
              src="/images/doctorAndNurse 2.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
          <div
            id="text"
            className="flex flex-col gap-8 items-start w-1/2 mt-36"
          >
            <Title color="dark-grey">
              MARI KITA VAKSIN <br /> COVID-19
            </Title>
            <Paragraph size="2xl" color="dark-grey" className="mb-8">
              Daftar Sekarang dan cari tahu informasi seputar
              <br /> Vaksinasi Covid-19 disini
            </Paragraph>

            <Button to="#" color="purple">
              Vaksinasi Pertama
            </Button>

            <Button to="#" color="purple">
              Vaksinasi Kedua
            </Button>
          </div>
        </div>
      </section>

      <section
        id="second"
        className={`${styles.section2} w-full relative bg-purple`}
      >
        <div
          id="divider"
          className={`${styles.footerDividerPurple} h-10  w-full absolute -top-10`}
        />

        <div id="content" className="flex h-full pt-24 bg-purple px-52">
          <div className="flex flex-col w-full items-center">
            <Title color="white">TATA CARA VAKSINASI COVUS</Title>

            <div className="flex flex-row w-full items-center justify-center gap-12 mt-12">
              <Card type="big">
                <div
                  id="card containter"
                  className="w-full h-full flex justify-between gap-12"
                >
                  
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Sesak Nafas
                </p>
              </Card>
              
              <Card type="big">
                <div
                  id="card containter"
                  className="w-full h-full flex justify-between gap-12"
                >
                 
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Sesak Nafas
                </p>
              </Card>

              <Card type="big">
                <div
                  id="card containter"
                  className="w-full h-full flex justify-between gap-12"
                >
                  
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Sesak Nafas
                </p>
              </Card>

              <Card type="big">
                <div
                  id="card containter"
                  className="w-full h-full flex justify-between gap-12"
                >
                  
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Sesak Nafas
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
