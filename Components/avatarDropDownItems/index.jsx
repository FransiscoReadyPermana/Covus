import React from 'react';
import style from './avatarDropDownItems.module.css';

export default function AvatarDropDownItems({ children, leftIcon, onClick, to }) {
  return (
    <button
      className={`flex items-center gap-4 text-white right-24 mb-4 w-full ${style.items}`}
      onClick={onClick}
      href={to}
    >
      <span id="left icon">{leftIcon}</span>
      {children}
    </button>
  );
}
