import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Headline from './Components/Headline';
import Title from './Components/title';
import Iframe from './Components/iframe';
import ContainerData from './Components/containerData';
import Paragraph from './Components/paragraph';
import Button from './Components/button';
import Footer from './Components/footer';

export default function Home() {
  return (
    <div className="">

      {/* first section */}

      <section
        id="first"
        className={`flex flex-col w-100 justify-center h-screen relative`}
      >
        <div className="flex justify-center items-center mt-32 h-20">
          <div className="bg-purple w-40 h-2 "></div>
          <Headline className="mx-5 text-dark-purple">
            HEALTH <span className="text-purple">IS</span> PRECIOUS
          </Headline>
          <div className="bg-purple w-40 h-2 "></div>
        </div>
        <div
          id="background"
          className={`h-full w-full ${styles.firstSection}`}
        ></div>
        <div className="bg-dark-grey w-full h-3" />
      </section>

      {/* second section */}

      <section
        id="second"
        className={`flex flex-col items-center w-full pt-12 gap-12 ${styles.section2} bg-purple relative`}
      >
        <Title color="white">LACAK KASUS COVID</Title>
        <Iframe />
        <div className="flex justify-between w-10/12">
          <ContainerData title="Sembuh" content="19,244 Jiwa" color="green" />
          <ContainerData title="Positif" content="19,244 Jiwa" color="red" />
          <ContainerData title="ODP" content="19,244 Jiwa" color="orange" />
          <ContainerData
            title="Meninggal"
            content="19,244 Jiwa"
            color="dark-green"
          />
        </div>
        <div
          id="divider"
          className={`${styles.bgThirdSection} h-52 w-full absolute -bottom-52 z-10`}
        />
      </section>

      {/* third section */}

      <section
        id="third"
        className={`w-full relative bg-purple ${styles.section3} `}
      >
        <div
          id="content"
          className="flex gap-24 h-full px-20 pb-28 pt-32 bg-white items-center"
        >
          <div className="relative w-1/2 h-5/6 pl-40  ">
            <Image
              src="/images/ReadingBook.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
          <div id="text" className="flex flex-col gap-12 items-start w-1/2">
            <Title color="dark-grey">
              EDUKASI <br /> SEPUTAR COVID 19
            </Title>
            <Paragraph size="2xl" color="dark-grey">
              Apa itu COVID-19, apa saja gejalanya dan bagaimana cara
              pencegahanya? Berikut ini mari kita lihat penjelasanya secara
              lengkap.
            </Paragraph>
            <Button color="purple">Lihat Selengkapnya</Button>
          </div>
        </div>
      </section>

      {/* fourth section */}

      <section
        id="fourth"
        className={`${styles.section4} w-full relative bg-purple`}
      >
        <div
          id="divider"
          className={`${styles.secondBGThirdSection} h-52 w-full absolute -top-40`}
        />
        <div
          id="content"
          className="flex gap-16 h-full px-52 pt-32 bg-purple items-center"
        >
          <div id="text" className="flex flex-col gap-12 items-start w-1/2">
            <Title color="white">
              RUMAH SAKIT <br /> RUJUKAN COVID-19
            </Title>
            <Paragraph size="2xl" color="white">
              Anda bingung dan tidak tahu kemana harus mencari Rumah Sakit
              Rujukan COVID-19. Disini kami menampikan data lengkap daftar Rumah
              Sakit Rujukan COVID-19 di Indonesia.
            </Paragraph>
            <Button color="dark-grey">Lihat Selengkapnya</Button>
          </div>
          <div className="relative w-1/2 h-5/6 pl-40  ">
            <Image
              src="/images/doctorAndNurse.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
        </div>
      </section>

      {/* fifth section */}

      <section
        id="fifth"
        className={`${styles.section5} w-full relative bg-purple`}
      >
        <div
          id="divider"
          className={`${styles.bgFourthSection} h-52 w-full absolute top-0`}
        />
        <div
          id="content"
          className="flex h-full px-52 pl-0 pt-32 bg-white items-center justify-center"
        >
          <div className="relative w-5/6 h-full -z-10 -left-36 -top-28">
            <Image
              src="/images/doctorAndNurse 2.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
          <div id="text" className="flex flex-col gap-12 items-start w-1/2">
            <Title color="dark-grey">
              MARI KITA VAKSIN <br /> COVID-19
            </Title>
            <Paragraph size="2xl" color="dark-grey">
              Mari kita cari tahu apa itu Vaksin, Vaksin apa saja yang tersedia,
              bagaimana cara melakukan vaksin serta hal apa saja yang harus
              dipersiapkan sebelum dan sesudah Vaksinasi covid-19
            </Paragraph>
            <Button color="dark-grey">Lihat Selengkapnya</Button>
          </div>
        </div>
      </section>
      <Footer color="purple"/>
    </div>
  );
}
