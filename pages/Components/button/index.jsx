import React from 'react';
import Styles from './button.module.css';

export default function Button({ children, color }) {
  let colorSelect;
  let colorHover;

  if (color === 'purple') {
    colorSelect = 'purple';
    colorHover = '#858bb1';
  }
  if (color === 'dark-grey') {
    colorSelect = 'dark-grey';
  }
  return <button className={`px-40 py-5 text-white text-2xl bg-${colorSelect} ${Styles.button} 4 rounded-full`}>{children}</button>;
}
