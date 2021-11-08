import React from 'react';
import AvatarDropDownItems from '../avatarDropDownItems';
import Profile from '../icons/profile';
import Games from '../icons/games';
import style from './AvatarDropDownMenu.module.css';
import Button from '../button/';
import Poligon from '../icons/poligon';

export default function AvatarDropDownMenu() {
  return (
    <div>
      <div className={`absolute right-30 ${style.Poligon}`}>
        <Poligon />
      </div>
      <div
        className={`absolute bg-purple mr-20 w-96 rounded-2xl -right-4 mt-8 p-4 ${style.menu}`}
      >
        <AvatarDropDownItems to="/" leftIcon={<Profile />}>
          Masuk Akun
        </AvatarDropDownItems>
        <AvatarDropDownItems to="/" leftIcon={<Profile />}>
          Daftar Akun
        </AvatarDropDownItems>
        <AvatarDropDownItems to="/" leftIcon={<Games />}>
          Permainan Covus
        </AvatarDropDownItems>
        <Button color="white" to="/" className="ml-3">
          Keluar
        </Button>
      </div>
    </div>
  );
}
