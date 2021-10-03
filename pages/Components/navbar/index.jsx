import React from 'react';
import Brand from '../brand';
import NavItems from '../navItems';

export default function Navbar() {
  return (
    <div className="flex items-center gap-12 bg-dark-grey pl-24 pt-5 pb-6 fixed w-screen z-20">
      <Brand />
      <NavItems className="ml-4" to="/">Beranda</NavItems>
      <NavItems className="ml-4" to="/">Informasi</NavItems>
      <NavItems className="ml-4" to="/">Edukasi</NavItems>
      <NavItems className="ml-4" to="/">RS Rujukan</NavItems>
      <NavItems className="ml-4" to="/">Vaksinasi</NavItems>
    </div>
  );
}
