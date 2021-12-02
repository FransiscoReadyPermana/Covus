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
      <div id="container" className={`absolute bg-purple w-80 ${style.menu}`}>
        <AvatarDropDownItems
          leftIcon={<Profile />}
          onClick={() => router.push('/akun/akun-saya')}
        >
          Akun Saya
        </AvatarDropDownItems>
        <AvatarDropDownItems
          leftIcon={<Edit />}
          onClick={() => router.push('/akun/ubah-kata-sandi')}
        >
          Ubah Kata Sandi
        </AvatarDropDownItems>
        <AvatarDropDownItems
          leftIcon={<Vaksin />}
          onClick={() => router.push('/akun/riwayat-vaksin')}
        >
          Riwayat Vaksin
        </AvatarDropDownItems>
      </div>
    </div>
  );
}
