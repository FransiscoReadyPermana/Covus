import React from 'react';
import style from './avatarDropDownItems.module.css';
import Link from 'next/link';

export default function AvatarDropDownItems({ children, leftIcon, to }) {
  return (
    <Link href={to}>
      <a
        className={`flex items-center gap-4 text-white right-24 mb-4 p-2 rounded-xl ${style.items}`}
      >
        <span id="left icon">{leftIcon}</span>
        {children}
      </a>
    </Link>
  );
}
