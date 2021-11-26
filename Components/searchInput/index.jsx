import React from "react";
import Image from "next/image";
import styles from "./searchInput.module.css";

export default function SearchInput({
  className,
  onChangeHandler,
  value,
  onClick,
}) {
  return (
    <div className="flex gap-12">
      <form
        className={`${className} ${styles.form} flex rounded-full`}
        action="#"
      >
        <button className={`bg-purple relative flex items-center justify-center h-10 rounded-full ${styles.search}`}>
          <div className="relative w-8 h-8">
            <Image
              src="/images/bx_bx-search-alt-2.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
        </button>
        <input
          type="text"
          placeholder="Cari disini"
          className={`${styles.input} rounded-xl`}
          value={value}
          onChange={onChangeHandler}
        />
      </form>
      <button
        className={`bg-purple flex items-center justify-center h-12 rounded-3xl ${styles.reset}`}
        onClick={onClick}
      >
        <div className="relative  w-8 h-8">
          <Image
            src="/images/ion_reload-sharp.svg"
            alt="reading-book-image"
            layout="fill"
          />
        </div>
      </button>
    </div>
  );
}
