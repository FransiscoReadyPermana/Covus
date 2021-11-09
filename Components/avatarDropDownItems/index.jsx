import React from 'react';
import style from './avatarDropDownItems.module.css';

export default function AvatarDropDownItems({ children, leftIcon, onClick }) {
  return (
    <button
      className={`flex items-center gap-4 text-white right-24 mb-4 p-2 w-full rounded-xl pl-4 ${style.items}`}
      onClick={onClick}
    >
      <span id="left icon">{leftIcon}</span>
      {children}
    </button>
  );
}
