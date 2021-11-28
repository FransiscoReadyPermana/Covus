import React from 'react';
import Footer from '../footer';
import Headline from '../Headline';
import styles from './needToLogin.module.css';

export default function NeedToLogin() {
  return (
    <>
      <section id="fifth" className={`${styles.section5} w-full relative`}>
        <div
          id="divider"
          className={`${styles.bgFourthSection} h-52 w-full absolute top-0`}
        />
        test
        <div
          id="content"
          className="flex justify-center items-center h-full pr-48 pl-48 pt-32 bg-white"
        >
          <Headline className={styles.headline}>
            Mohon Maaf, untuk bisa mengakses halaman ini anda perlu melakukan
            login terlebih dahulu 🙏🙏
          </Headline>
        </div>
      </section>
      <Footer color="purple" />
    </>
  );
}
