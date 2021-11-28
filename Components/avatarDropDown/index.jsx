import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './avatarDropDown.module.css';

export default function AvatarDropDown({ children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const handleClickOutside = () => {
      setShow(false);
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <button className={`${style.avatar}`} onClick={() => setShow(!show)}>
        <div className={`bg-white rounded-full ${style.whiteContainer}`}>
          <div className="relative w-8 h-8">
            <Image
              src="/images/profile.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
        </div>
      </button>
      {show && children}
    </>
  );
}
