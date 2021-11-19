import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import AvatarDropDown from '../avatarDropDown';
import AvatarDropDownMenu from '../avatarDropDownMenu';
import Brand from '../brand';
import Button from '../button';
import NavItems from '../navItems';
import PopUpLogin from '../popUpLogin';
import style from './navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <PopUpLogin
        open={isOpen}
        onClick={() => setIsOpen(false)}
        onClickBackground={() => setIsOpen(false)}
        onClickDaftar={() => {
          setIsOpen(false);
          router.push('/signUp');
        }}
      />
      <div className="flex items-center justify-between bg-dark-grey pl-24 pt-5 pb-6 fixed w-full z-50 pr-24">
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
            isActive={
              router.pathname === '/vaksinasi' ||
              router.pathname ===
                '/vaksinasi/lokasi-vaksinasi/[jenis_vaksin]' ||
              router.pathname === '/vaksinasi/validasi-vaksinasi'
            }
          >
            Vaksinasi
          </NavItems>
        </div>
        <div id="right" className="flex justify-items-center">
          <button
            type="button"
            className={`bg-purple py-3 px-4 text-white rounded-xl ${style.button}`}
            onClick={() => setIsOpen(true)}
          >
            Login/Register
          </button>
        </div>
      </div>
    </>
  );
}
