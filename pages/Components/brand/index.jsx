import React from 'react';
import Logo from '../icons/Logo';

export default function Brand() {
  return (
    <div className="flex items-center font-bold text-3xl">
      <Logo />
      <h1 className="ml-4 text-white">Co<span className="text-purple">vus</span></h1>
    </div>
  );
}
