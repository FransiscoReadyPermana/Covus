import { useState } from 'react';
import Image from 'next/image';
import style from './avatarDropDown.module.css'

export default function AvatarDropDown({ children }) {
  const [show, setShow] = useState(false);
  return (
    <a className={`${style.avatar}`} onClick={() => setShow(!show)}>
      <div className="bg-white p-1 rounded-full">
        <div className="relative w-8 h-8">
          <Image
            src="/images/profile.svg"
            alt="reading-book-image"
            layout="fill"
          />
        </div>
      </div>
      {show && children}
    </a>
  );
}
