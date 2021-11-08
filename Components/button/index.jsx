import React from 'react';
import Styles from './button.module.css';
import Link from 'next/link';

export default function Button({ children, color, to, onClick, className  }) {
  let colorSelect;
  let hover;
  let text;

  if (color === 'purple') {
    colorSelect = 'bg-purple';
    hover = Styles.buttonPurple;
    text = 'text-white';
  }

  if (color === 'white') {
    colorSelect = 'bg-white';
    hover = Styles.buttonWhite;
    text = 'text-purple';
  }

  if (color === 'dark-grey') {
    colorSelect = 'bg-dark-grey';
    hover = Styles.buttonDarkGrey;
    text = 'text-white';
  }
  if (color === 'secondary') {
    colorSelect = 'white';
    hover = Styles.buttonSecondary;
    text = 'text-dark-grey';
  }
  return (
    <Link href={to} passHref>
      <button
        className={`${Styles.button} py-3 ${text} text-xl ${colorSelect} ${className} ${hover} 4 rounded-full`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}
