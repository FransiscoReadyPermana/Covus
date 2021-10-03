import React from 'react';
import Styles from './headline.module.css';

export default function Headline({ children, className }) {
  return (
    <div>
      <h1 className={`text-5xl font-bold text-center ${Styles.Headline} ${className}`}>{children}</h1>
    </div>
  );
}
