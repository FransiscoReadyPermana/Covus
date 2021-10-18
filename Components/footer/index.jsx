import React from "react";
import styles from "./footer.module.css";

export default function Footer({ color }) {
  if (color === "purple") {
    return (
      <footer className={`relative bg-purple`}>
        <div
          id="divider"
          className={`${styles.footerDividerPurple} h-10  w-full absolute -top-10`}
        />
        <p className="text-center text-white font-semibold text-xl py-9">
          Copyright. Covus 2021. All Rights Reserved.
        </p>
      </footer>
    );
  }
  if (color === "white") {
    return (
      <footer className={`relative bg-white h-40`}>
        <div
          id="divider"
          className={`${styles.footerDividerWhite} h-52  w-full absolute -top-2 -z-20`}
        />
        <div className="h-80 w-full flex items-center justify-center pt-40">
          <p className="text-center text-dark-grey font-semibold text-xl">
            Copyright. Covus 2021. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
}
