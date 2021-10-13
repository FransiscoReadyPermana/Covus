import React from 'react';
import Styles from './button.module.css';
import Link from 'next/link';

export default function Button({ children, color, to  }) {
  let colorSelect;

  if (color === 'purple') {
    colorSelect = 'purple';
  }
  if (color === 'dark-grey') {
    colorSelect = 'dark-grey';
  }
  return (
    <Link href={to}>
      <button
        className={`${Styles.button} py-5 text-white text-2xl bg-${colorSelect} ${Styles.button} 4 rounded-full`}
      >
        {children}
      </button>
    </Link>
  );
}
