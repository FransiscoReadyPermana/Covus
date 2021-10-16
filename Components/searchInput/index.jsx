import React from 'react';
import Image from 'next/image';
import styles from './searchInput.module.css';

export default function SearchInput({ className, onChangeHandler, value }) {


  return (
    <div className="flex gap-12">
      <form
        className={`${className} ${styles.form} flex rounded-full`}
        action="#"
      >
        <button className="bg-purple relative flex items-center justify-center w-20 h-10 rounded-full -ml-1">
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
          className={`pl-20 pr-4 ${styles.input} rounded-xl`}
          value={value}
          onChange={onChangeHandler}
        />
      </form>
      <button className="bg-purple flex items-center justify-center w-20 h-12 rounded-3xl">
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
