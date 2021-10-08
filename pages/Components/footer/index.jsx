import React from 'react'
import styles from '../../../styles/Home.module.css';

export default function Footer() {
  return (
    <footer className={`relative bg-purple`}>
      <div
        id="divider"
        className={`${styles.secondBGFourthSection} h-10  w-full absolute -top-10`}
      />
      <p className="text-center text-white font-normal text-xl py-9">
        Copyright. Covus 2021. All Rights Reserved.
      </p>
    </footer>
  );
}
