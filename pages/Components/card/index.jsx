import React from 'react';
import Styles from './card.module.css'

export default function Card({ children }) {
  return (
    <div className={`flex flex-col justify-center bg-white w-1/4 h-80 ${Styles.card} gap-8 pb-5 pt-2`}>
      {children}
    </div>
  );
}
