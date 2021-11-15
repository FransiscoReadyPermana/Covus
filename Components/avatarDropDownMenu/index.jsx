import React, { useEffect } from 'react';
import AvatarDropDownItems from '../avatarDropDownItems';
import Profile from '../icons/profile';
import Games from '../icons/games';
import style from './AvatarDropDownMenu.module.css';
import Button from '../button/';
import Poligon from '../icons/poligon';
import PopUpLogin from '../popUpLogin';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AvatarDropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = () => {
      setIsOpen(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <PopUpLogin open={isOpen} onClick={() => setIsOpen(false)} />
      <div className={`absolute ${style.Poligon}`}>
        <Poligon />
      </div>
      <div
        className={`absolute bg-purple mr-20 w-96 rounded-2xl -right-4 mt-16 p-4 ${style.menu}`}
      >
        <AvatarDropDownItems
          leftIcon={<Profile />}
          onClick={() => setIsOpen(true)}
        >
          Masuk Akun
        </AvatarDropDownItems>
        <AvatarDropDownItems
          leftIcon={<Profile />}
          onClick={() => router.push('/signUp')}
        >
          Daftar Akun
        </AvatarDropDownItems>
        <AvatarDropDownItems leftIcon={<Games />}>
          Permainan Covus
        </AvatarDropDownItems>
        <Button color="white" to="/" className="ml-3">
          Keluar
        </Button>
      </div>
    </div>
  );
}
