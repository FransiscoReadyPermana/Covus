import React from 'react';
import Logo from '../icons/Logo';
import style from './brand.module.css';

export default function Brand() {
  return (
    <div className={`flex items-center text-3xl ${style.brand}`}>
      <Logo />
      <h1 className="ml-4 text-white">
        Co<span className="text-purple">vus</span>
      </h1>
    </div>
  );
}
