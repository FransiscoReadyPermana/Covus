import React from "react";
import Image from "next/image";
import Title from "../../Components/title";
import Paragraph from "../../Components/paragraph";
import styles from "./about.module.css";
import Card from "../../Components/card";
import Footer from "../../Components/footer";
import TableData from "../../Components/table";

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
        <div
          id="content"
          className="flex gap-16 h-full px-52 pt-24 bg-purple"
        ></div>
      </section>
      <Footer color="purple" />
    </div>
  );
}
