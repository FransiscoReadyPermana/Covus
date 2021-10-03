import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from './Components/navbar';
import Headline from './Components/Headline';
import Title from './Components/title';
import Iframe from './Components/iframe';

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
          className={`h-4/5 w-full ${styles.firstSection}`}
        ></div>
      </section>

      {/* second section */}

      <section
        id="second"
        className={`flex w-100 justify-center h-screen bg-purple`}
      >
        <div className={`flex flex-col w-full justify-center items-center ${styles.mtSecondSection} h-20 gap-8`}>
          <Title color="white">LACAK KASUS COVID</Title>
          <Iframe />
        </div>
      </section>
    </div>
  );
}
