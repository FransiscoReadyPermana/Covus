import React from 'react';
import Styles from './card.module.css';

export default function Card({ children, type, className, gap }) {

  let gapp = 'gap-'+gap;

  if (type === 'small'){
    return (
      <div
        className={`flex flex-col justify-center bg-white w-1/4 h-52 ${Styles.cardSmall} ${className} gap-3 p-4 pb-5 pt-5`}
      >
        {children}
      </div>
    );
  };

  if (type === 'big') {
    return (
      <div
        className={`flex flex-col justify-center bg-white w-1/4 h-80 ${Styles.card} ${className} ${gapp} pb-5 pt-2`}
      >
        {children}
      </div>
    );
  };
  return null;
}

Card.defaultProps = {
  gap: '8',
};
