import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from './Components/navbar';
import Headline from './Components/Headline';
import Title from './Components/title';
import Iframe from './Components/iframe';
import ContainerData from './Components/containerData';
import Paragraph from './Components/paragraph';
import Button from './Components/button'

export default function Home() {
  return (
    <div className="">
      <Navbar />

      {/* first section */}
      <section
        id="first"
        className={`flex flex-col w-100 justify-center h-screen`}
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
      </section>

      {/* second section */}

      <section
        id="second"
        className={`flex flex-col items-center w-full pt-12 gap-12 h-screen bg-purple`}
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
      </section>

      <section
        id="third"
        className={`h-screen w-full relative bg-purple ${styles.mtThirdSection}`}
      >
        <div
          className={`${styles.bgThirdSection} bg-purple mt-20 h-48 w-full absolute`}
        />
        <div
          id="content"
          className="flex gap-24 h-full px-20 pt-32 bg-white items-center"
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
    </div>
  );
}
