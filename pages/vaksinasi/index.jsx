import React from "react";
import Image from "next/image";
import styles from "./vaksin.module.css";
import Title from "../../Components/title";
import Paragraph from "../../Components/paragraph";
import Button from "../../Components/button";
import Footer from "../../Components/footer";
import formatK from "../../utils/format";
import Card from "../../Components/card";

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

        <div
          id="content"
          className="flex gap-12 h-full px-52 bg-purple justify-center"
        >
          <div id="text" className="flex flex-col items-center w-full mt-24">
            <Title color="white">PROSES VAKSINASI COVUS</Title>

            <div className="w-full h-full flex justify-center gap-12 mt-12">
              <Card type="big">
                <div className="absolute h-12 w-12 right-4/4 ml-6 mb-56 mt-4">
                  <Image
                    src="/images/number1.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <div className="h-2/3 w-2/3 flex m-auto mt-8">
                  <div className=" relative h-full w-full flex flex-col">
                    <Image
                      src="/images/layer 1.png"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Datang ke Lokasi
                </p>
              </Card>

              <Card type="big">
                <div className="absolute h-12 w-12 right-4/4 ml-6 mb-56 mt-4">
                  <Image
                    src="/images/number2.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <div className="h-2/3 w-2/3 flex m-auto mt-8">
                  <div className=" relative h-full w-full flex flex-col">
                    <Image
                      src="/images/layer 2.png"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Pendataan Ulang
                </p>
              </Card>

              <Card type="big">
                <div className="absolute h-12 w-12 right-4/4 ml-6 mb-56 mt-4">
                  <Image
                    src="/images/number3.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <div className="h-2/3 w-2/3 flex m-auto mt-8">
                  <div className=" relative h-full w-full flex flex-col">
                    <Image
                      src="/images/layer 3.png"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Check Kesehatan
                </p>
              </Card>
            </div>

            <div
              id="content2"
              className="w-full h-full flex justify-center gap-12 mt-12 mb-28"
            >
              <Card type="big">
                <div className="absolute h-12 w-12 right-4/4 ml-6 mb-56 mt-4">
                  <Image
                    src="/images/number4.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <div className="h-2/3 w-2/3 flex m-auto mt-8">
                  <div className=" relative h-full w-full flex flex-col">
                    <Image
                      src="/images/layer 4.png"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Penyuntikan Vaksin
                </p>
              </Card>

              <Card type="big">
                <div className="absolute h-12 w-12 right-4/4 ml-6 mb-56 mt-4">
                  <Image
                    src="/images/number5.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <div className="h-2/3 w-2/3 flex m-auto mt-8">
                  <div className=" relative h-full w-full flex flex-col">
                    <Image
                      src="/images/layer 5.png"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Observasi Kesehatan
                </p>
              </Card>

              <Card type="big">
                <div className="absolute h-12 w-12 right-4/4 ml-6 mb-56 mt-4">
                  <Image
                    src="/images/number6.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <div className="h-2/3 w-2/3 flex m-auto mt-8">
                  <div className=" relative h-full w-full flex flex-col">
                    <Image
                      src="/images/layer 6.png"
                      alt="reading-book-image"
                      layout="fill"
                    />
                  </div>
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Vaksinasi Selesai
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="third" className={`${styles.section3} w-full relative`}>
        <div
          id="divider"
          className={`${styles.dividerKetiga} h-10  w-full absolute`}
        />
      </section>
    </div>
  );
}
