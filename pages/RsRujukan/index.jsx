import React from 'react';
import Image from 'next/image';
import Title from '../../Components/title';
import Paragraph from '../../Components/paragraph';
import styles from './RsRujukan.module.css';
import Card from '../../Components/card';
import Footer from '../../Components/footer';
import TableData from '../../Components/table';

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
        <div id="content" className="flex gap-16 h-full px-52 pt-24 bg-purple">
          <div
            id="text"
            className="flex flex-col gap-16 items-start w-1/2 mt-8"
          >
            <div className="flex flex-col gap-4">
              <Title color="white">
                RUMAH SAKIT <br /> RUJUKAN COVID-19
              </Title>
              <Paragraph size="2xl" color="white">
                Dapatkan informasi mengenai rumah sakit rujukan covid-19, untuk
                memeriksakan kesehatan diri di sekitar wilayah anda
              </Paragraph>
            </div>
            <div
              id="card containter"
              className="w-full h-full flex justify-start gap-12"
            >
              <Card type="small">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/24 Hour.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-xl text-dark-grey"
                >
                  Siap Melayani 24 jam
                </p>
              </Card>
              <Card type="small">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/Hearth.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-xl text-dark-grey"
                >
                  Pelayanan Sepenuh Hati
                </p>
              </Card>
              <Card type="small">
                <div className="relative h-3/4 w-full flex flex-col">
                  <Image
                    src="/images/fasilitas.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-xl text-dark-grey"
                >
                  Fasilitas Memadai
                </p>
              </Card>
            </div>
          </div>
          <div className="relative w-1/2 h-5/6 pl-40 mt-12">
            <Image
              src="/images/doctorAndNurse.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
        </div>
      </section>

      {/* second section */}

      <section id="second" className={`w-full relative bg-purple mt-32 mb-24`}>
        <div
          id="divider"
          className={`${styles.bgThirdSection} h-52 w-full absolute -top-32`}
        />
        <div
          id="content"
          className="flex flex-col gap-16 h-full px-52 pt-24 bg-white"
        >
          <Title className="text-center" color="dark-grey">
            DAFTAR RUMAH SAKIT RUJUKAN
          </Title>
          <Paragraph className="text-center" size="2xl" color="dark-grey">
            Berikut kami sajikan data lengkap Rumah Sakit Rujukan di Indonesia,
            agar anda bisa mengetahui daftar Rumah Sakit Rujukan di sekitar anda
            dengan cepat dan mudah.
          </Paragraph>
          <TableData data={hospitals} type="Hospitals" />
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/rs-rujukan');
  const result = await response.json();

  const sortdata = result.data.sort((a, b) => a.no - b.no);
  return {
    props: {
      hospitals: sortdata,
    },
  };
}
