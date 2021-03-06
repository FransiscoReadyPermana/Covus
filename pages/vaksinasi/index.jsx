import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/vaksin.module.css";
import Title from "../../Components/title";
import Paragraph from "../../Components/paragraph";
import Button from "../../Components/button";
import Footer from "../../Components/footer";
import Card from "../../Components/card";
import Link from "next/link";
import uuid from "react-uuid";
import Pagination from "../../Components/pagination";
import PopUpSK from "../../Components/pop-up/pop-up-SK";
import { useSession } from "next-auth/client";
import NeedToLogin from "../../Components/needToLogin";

export default function Vaksinasi({ data }) {
  const dataVaksinPertama = data.filter(
    (item) => item.jenisVaksin === "Vaksinasi Pertama"
  );
  const vaksinIdPertama = dataVaksinPertama.map((item) => item.vaksinId);
  const dataPertama = [...new Set(vaksinIdPertama.map(JSON.stringify))].map(JSON.parse);

  const dataVaksinKedua = data.filter((item) => item.jenisVaksin === "Vaksinasi Kedua");
  const vaksinIdKedua = dataVaksinKedua.map((item) => item.vaksinId);
  const dataKedua = [...new Set(vaksinIdKedua.map(JSON.stringify))].map(JSON.parse);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentTableData, setCurrentTableData] = useState([]);
  const [dataVaksin, setDataVaksin] = useState(dataPertama);
  const [color, setColor] = useState("purple");
  const [colorSecondary, setColorSecondary] = useState("secondary");
  const [vaksin, setVaksin] = useState("PERTAMA");
  const [jenisVaksin, setJenisVaksin] = useState("Vaksinasi Pertama");
  const [isOpen, setIsOpen] = useState(false);
  const [session] = useSession();
  const PageSize = 4;
  let firstPageIndex = 0;
  let lastPageIndex = 0;

  useEffect(() => {
    firstPageIndex = (currentPage - 1) * PageSize;
    lastPageIndex = firstPageIndex + PageSize;
    setCurrentTableData(dataVaksin.slice(firstPageIndex, lastPageIndex));
    setColorSecondary(colorSecondary);
    setColor(color);
    setVaksin(vaksin);
  }, [currentPage, dataVaksin, color, colorSecondary, vaksin]);

  const VaksinPertama = () => {
    setDataVaksin(dataPertama);
    setJenisVaksin("Vaksinasi Pertama");
    setCurrentPage(1);
    setColorSecondary("secondary");
    setColor("purple");
    setVaksin("PERTAMA");
  };

  function VaksinKedua() {
    setDataVaksin(dataKedua);
    setJenisVaksin("Vaksinasi Kedua");
    setCurrentPage(1);
    setColorSecondary("purple");
    setColor("secondary");
    setVaksin("KEDUA");
  }

  return (
    <>
      {session ? (
        <div className="h-screen w-full">
          <section id="fifth" className={`${styles.section5} w-full relative`}>
            <div
              id="divider"
              className={`${styles.bgFourthSection} h-52 w-full absolute top-0`}
            />

            <div id="content" className="flex h-full pr-48 pl-0 pt-32 bg-white">
              <div className="relative w-3/6 h-4/6 -z-10 top-32">
                <Image
                  src="/images/doctorAndNurse2.svg"
                  alt="reading-book-image"
                  layout="fill"
                />
              </div>
              <div
                id="text"
                className="flex flex-col gap-8 items-start w-1/2 mt-36"
              >
                <div className="flex flex-col gap-4">
                  <Title color="dark-grey">
                    MARI KITA VAKSIN <br /> COVID-19
                  </Title>
                  <Paragraph size="2xl" color="dark-grey" className="mb-8">
                    Daftar Sekarang dan cari tahu informasi seputar
                    <br /> Vaksinasi Covid-19 disini
                  </Paragraph>
                </div>

                <Button to="#contentCard" color={color} onClick={VaksinPertama}>
                  Vaksinasi Pertama
                </Button>

                <Button
                  to="#contentCard"
                  color={colorSecondary}
                  onClick={VaksinKedua}
                >
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
              <div
                id="text"
                className="flex flex-col items-center w-full mt-24"
              >
                <Title color="white">PROSES VAKSINASI COVUS</Title>

                <div className="w-full h-full flex justify-center gap-12 mt-12">
                  <Card type="big" gap="3" className={`${styles.card}`}>
                    <div className="abosolute">
                      <div
                        id="image"
                        className="relative h-12 w-12 left-6 top-4"
                      >
                        <Image
                          src="/images/number1.svg"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className="h-full w-2/3 flex m-auto">
                      <div className="relative h-full w-full flex flex-col">
                        <Image
                          src="/images/Layer1.png"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <p
                      color="dark-grey"
                      className={`text-center font-semibold text-2xl text-dark-grey ${styles.textCard}`}
                    >
                      Datang ke Lokasi
                    </p>
                  </Card>

                  <Card type="big" gap="3" className={`${styles.card}`}>
                    <div className="abosolute">
                      <div
                        id="image"
                        className="relative h-12 w-12 left-6 top-4"
                      >
                        <Image
                          src="/images/number2.svg"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className="h-2/3 w-2/3 flex m-auto">
                      <div className=" relative h-full w-full flex flex-col">
                        <Image
                          src="/images/Layer2.png"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <p
                      color="dark-grey"
                      className={`text-center font-semibold text-2xl text-dark-grey ${styles.textCard}`}
                    >
                      Pendataan Ulang
                    </p>
                  </Card>

                  <Card type="big" gap="3" className={`${styles.card}`}>
                    <div className="abosolute">
                      <div
                        id="image"
                        className="relative h-12 w-12 left-6 top-4"
                      >
                        <Image
                          src="/images/number3.svg"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className="h-2/3 w-2/3 flex m-auto">
                      <div className=" relative h-full w-full flex flex-col">
                        <Image
                          src="/images/Layer3.png"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <p
                      color="dark-grey"
                      className={`text-center font-semibold text-2xl text-dark-grey ${styles.textCard}`}
                    >
                      Check Kesehatan
                    </p>
                  </Card>
                </div>

                <div
                  id="content2"
                  className="w-full h-full flex justify-center gap-12 mt-12 mb-28"
                >
                  <Card type="big" gap="3" className={`${styles.card}`}>
                    <div className="abosolute">
                      <div
                        id="image"
                        className="relative h-12 w-12 left-6 top-4"
                      >
                        <Image
                          src="/images/number4.svg"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className="h-2/3 w-2/3 flex m-auto">
                      <div className=" relative h-full w-full flex flex-col">
                        <Image
                          src="/images/Layer4.png"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <p
                      color="dark-grey"
                      className={`text-center font-semibold text-2xl text-dark-grey ${styles.textCard}`}
                    >
                      Penyuntikan Vaksin
                    </p>
                  </Card>

                  <Card type="big" gap="3" className={`${styles.card}`}>
                    <div className="abosolute">
                      <div
                        id="image"
                        className="relative h-12 w-12 left-6 top-4"
                      >
                        <Image
                          src="/images/number5.svg"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className="h-2/3 w-2/3 flex m-auto">
                      <div className=" relative h-full w-full flex flex-col">
                        <Image
                          src="/images/Layer5.png"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <p
                      color="dark-grey"
                      className={`text-center font-semibold text-2xl text-dark-grey ${styles.textCard}`}
                    >
                      Observasi Kesehatan
                    </p>
                  </Card>

                  <Card type="big" gap="3" className={`${styles.card}`}>
                    <div className="abosolute">
                      <div
                        id="image"
                        className="relative h-12 w-12 left-6 top-4"
                      >
                        <Image
                          src="/images/number6.svg"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className="h-2/3 w-2/3 flex m-auto">
                      <div className=" relative h-full w-full flex flex-col">
                        <Image
                          src="/images/Layer6.png"
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <p
                      color="dark-grey"
                      className={`text-center font-semibold text-2xl text-dark-grey ${styles.textCard}`}
                    >
                      Vaksinasi Selesai
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section
            id="third"
            className={`${styles.section3} w-full relative mb-40`}
          >
            <div
              id="divider"
              className={`${styles.dividerKetiga} h-10  w-full absolute`}
            />
            <div
              id="contentCard"
              className="flex flex-col w-full h-full px-52 bg-white pt-40 items-center"
            >
              <Title color="dark-grey" id="judulVaksin">
                PILIH LOKASI DAERAH VAKSINASI {vaksin}
              </Title>

              <div
                id="containerCard"
                className="w-full flex justify-center gap-12 mt-12 justify-center"
              >
                {currentTableData.map((item) => (
                  <Link
                    href={`/vaksinasi/lokasi-vaksinasi/${jenisVaksin}/${item.nama}`}
                    passHref
                    key={uuid()}
                  >
                    <div
                      id="card"
                      className={`flex flex-col justify-center bg-white w-1/4 h-96 gap-8 pt-2 items-center ${styles.card} overflow-hidden mb-8`}
                      key={uuid()}
                    >
                      <div className={`relative w-80 mt-4 ${styles.image}`}>
                        <Image
                          src={item.image}
                          alt="reading-book-image"
                          layout="fill"
                        />
                      </div>
                      <p
                        color="dark-grey"
                        className="text-center font-semibold text-3xl text-dark-grey mb-6"
                      >
                        {item.nama}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={dataVaksin.length}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>

            <PopUpSK
              open={isOpen}
              onClickBackground={() => setIsOpen(false)}
              onClick={() => setIsOpen(false)}
            />

            <div
              className={`fixed w-8 h-8 bottom-10 right-0 p-6 mt-8 mr-16 ${styles.chevronUp} z-20`}
              onClick={() => setIsOpen(true)}
            >
              <div
                className={`absolute w-10 h-10 top-0 left-0 flex ${styles.imgChevron}`}
              >
                <Image src="/images/Help.svg" alt="" layout="fill" />
              </div>
            </div>
          </section>
          <Footer color="purple" />
        </div>
      ) : (
        <div>
          <NeedToLogin />
        </div>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const baseUrl = process.env.BASE_URL;
  const pertama = await fetch(`${baseUrl}api/lokasi-vaksinasi`);
  const result = await pertama.json();
  const namaVaksin = result.data.map((item) => item.vaksinId.nama);
  return {
    props: {
      data: result.data,
    },
  };
}
