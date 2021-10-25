import React from 'react';
import Styles from './button.module.css';
import Link from 'next/link';

export default function Button({ children, color, to  }) {
  let colorSelect;
  let hover;

  if (color === 'purple') {
    colorSelect = 'bg-purple';
    hover = Styles.buttonPurple;
  }
  if (color === 'dark-grey') {
    colorSelect = 'bg-dark-grey';
    hover = Styles.buttonDarkGrey;
  }
  return (
    <Link href={to} passHref>
      <button
        className={`${Styles.button} py-3 text-white text-xl ${colorSelect} ${Styles.button} ${hover} 4 rounded-full`}
      >
        {children}
      </button>
    </Link>
  );
}
