import React from 'react';
import style from './headline.module.css';

export default function Headline({ children, className }) {
  return (
    <h1
      className={`text-5xl font-bold text-center ${className} ${style.headline}`}
    >
      {children}
    </h1>
  );
}
