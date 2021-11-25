import React from 'react';
import Link from 'next/link';
import Styles from './navItems.module.css'

export default function NavItems({ children, to, isActive }) {
  let hover;
  let boldest;

  if (isActive) {
    hover = Styles.navItemsActive
    boldest = Styles.bold;
  } else {
    boldest = Styles.medium;
  }

  return (
    <>
      <Link href= {`${to}`}>
        <a className={`text-2xl ${boldest}  text-white relative ${Styles.navItems} ${hover}`}>{children}</a>
      </Link>
    </>
  );
}
