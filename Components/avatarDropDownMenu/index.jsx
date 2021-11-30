import React, { useEffect } from 'react';
import AvatarDropDownItems from '../avatarDropDownItems';
import Profile from '../icons/profile';
import Games from '../icons/games';
import style from './AvatarDropDownMenu.module.css';
import Button from '../button/';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/client';
import Edit from '../icons/Edit';
import Vaksin from '../icons/Vaksin';

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
      <div id="container" className={`absolute bg-purple w-96 ${style.menu}`}>
        <AvatarDropDownItems
          leftIcon={<Profile />}
          onClick={() => router.push('/profile/akun-saya')}
        >
          Lihat Profil
        </AvatarDropDownItems>
        <AvatarDropDownItems
          leftIcon={<Edit />}
          onClick={() => router.push('/profile/ubah-kata-sandi')}
        >
          Ubah Kata Sandi
        </AvatarDropDownItems>
        <AvatarDropDownItems
          leftIcon={<Vaksin />}
          onClick={() => router.push('/profile/riwayat-vaksinasi')}
        >
          Riwayat Vaksinasi
        </AvatarDropDownItems>
      </div>
    </div>
  );
}
