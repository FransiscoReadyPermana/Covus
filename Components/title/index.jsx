import React from 'react'
import style from './title.module.css';

export default function Title({children, color, className}) {
  let colorSelect = color;

  if (color === 'dark-grey') {
    colorSelect = 'text-dark-grey';
  } else if (color ==='white'){
    colorSelect = 'text-white '
  }

  return (
    <h1
      className={`font-bold text-4xl leading-relaxed ${colorSelect} ${className} ${style.title}`}
    >
      {children}
    </h1>
  );
}
