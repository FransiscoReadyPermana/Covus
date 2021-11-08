import React from 'react';
import AvatarDropDownItems from '../avatarDropDownItems';
import Profile from '../icons/profile';
import style from './AvatarDropDownMenu.module.css';
import Poligon from '../icons/poligon';

export default function AvatarDropDownMenu() {
  return (
    <div
      className={`absolute bg-purple mr-20 w-80 rounded-2xl right-2 mt-2 p-4 ${style.menu}`}
    >
      <AvatarDropDownItems to="/" leftIcon={<Profile />}>
        Masuk Akun
      </AvatarDropDownItems>
      <AvatarDropDownItems to="/" leftIcon={<Profile />}>
        Daftar Akun
      </AvatarDropDownItems>
      
    </div>
  );
}
