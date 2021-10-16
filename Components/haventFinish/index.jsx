import React from 'react'
import Footer from '../footer';
import Headline from '../Headline'
import styles from './haventFinish.module.css';

export default function HaventFinish() {
  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`w-full relative bg-purple ${styles.section1} `}
      >
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-52 w-full absolute top-9 z-10`}
        />
        <div
          id="content"
          className="flex gap-24 h-full px-20 pb-28 pt-60 bg-white items-center"
        >
          <Headline className="text-dark-grey">
            MASIH DALAM TAHAP PENGEMBANGAN HARAP BERSABAR DAN MENUNGGU
          </Headline>
        </div>
      </section>
      <Footer color="purple"></Footer>
    </div>
  );
}
