import React, { useEffect } from 'react';
import AvatarDropDownItems from '../avatarDropDownItems';
import Profile from '../icons/profile';
import Games from '../icons/games';
import style from './AvatarDropDownMenu.module.css';
import Button from '../button/';
import Poligon from '../icons/Poligon';
import PopUpLogin from '../popUpLogin';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client';

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
      <div className={`absolute ${style.Poligon}`}>
        <Poligon />
      </div>
      <div
        id="container"
        className={`absolute bg-purple w-96 rounded-2xl ${style.menu}`}
      >
        <h5>hallo</h5>
        <AvatarDropDownItems
          leftIcon={<Profile />}
          onClick={() => setIsOpen(true)}
        >
          Lihat Profil
        </AvatarDropDownItems>
        <AvatarDropDownItems leftIcon={<Games />}>
          Permainan Covus
        </AvatarDropDownItems>
        <Button color="white" to="/" className="ml-3" onClick={() => signOut()}>
          Keluar
        </Button>
      </div>
    </div>
  );
}
