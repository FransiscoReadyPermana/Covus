import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Brand from '../brand';
import NavItems from '../navItems';

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname.split("/")
  

  return (
    <div className="flex items-center gap-12 bg-dark-grey pl-24 pt-5 pb-6 fixed w-full z-30">
      <Brand />
      <NavItems className="ml-4" to="/" isActive={router.pathname === '/'}>
        Beranda
      </NavItems>
      <NavItems className="ml-4" to="/">
        Informasi
      </NavItems>
      <NavItems
        className="ml-4"
        to="/edukasi"
        isActive={router.pathname === '/edukasi'}
      >
        Edukasi
      </NavItems>
      <NavItems
        className="ml-4"
        to="/RsRujukan"
        isActive={router.pathname === '/RsRujukan'}
      >
        RS Rujukan
      </NavItems>
      <NavItems className="ml-4" to="/">
        Vaksinasi
      </NavItems>
    </div>
  );
}
