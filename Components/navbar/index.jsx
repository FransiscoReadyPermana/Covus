import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Brand from '../brand';
import NavItems from '../navItems';

export default function Navbar() {
  const router = useRouter();
  const path = router.pathname.split("/")
  

  return (
    <div className="flex items-center justify-between bg-dark-grey pl-24 pt-5 pb-6 fixed w-full z-30">
      <div id="left" className="flex items-center gap-12">
        <Brand />
        <NavItems className="ml-4" to="/" isActive={router.pathname === '/'}>
          Beranda
        </NavItems>
        <NavItems
          className="ml-4"
          to="/informasi"
          isActive={router.pathname === '/informasi'}
        >
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
        <NavItems
          className="ml-4"
          to="/vaksinasi"
          isActive={router.pathname === '/vaksinasi'}
        >
          Vaksinasi
        </NavItems>
      </div>
      <div id="right">
      </div>
    </div>
  );
}
