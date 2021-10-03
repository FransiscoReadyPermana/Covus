import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from './Components/navbar';
import Headline from './Components/Headline';
import Title from './Components/title';
import Iframe from './Components/iframe';
import ContainerData from './Components/containerData';

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* first section */}
      <section
        id="first"
        className={`flex flex-col w-100 justify-center h-screen`}
      >
        <div className="flex justify-center items-center mt-28 h-20">
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
        className={`flex flex-col items-center w-full gap-8 pt-12 justify-center h-screen bg-purple`}
      >
        <Title color="white">LACAK KASUS COVID</Title>
        <Iframe />
        <div className="flex justify-between w-10/12">
          <ContainerData title="Sembuh" content="19,244 Jiwa" color="green" />
          <ContainerData title="Positif" content="19,244 Jiwa" color="red" />
          <ContainerData title="ODP" content="19,244 Jiwa" color="orange" />
          <ContainerData title="Meninggal" content="19,244 Jiwa" color="dark-green" />
        </div>
      </section>
    </div>
  );
}
