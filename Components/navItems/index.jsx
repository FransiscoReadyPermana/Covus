import React from 'react';
import Link from 'next/link';
import Styles from './navItems.module.css'

export default function NavItems({ children, to, isActive }) {
  let hover;
  let boldest;

  if (isActive) {
    hover = Styles.navItemsActive
    boldest = 'font-bold';
  } else {
    boldest = 'font-medium';
  }

  return (
    <>
      <Link href= {`${to}`}>
        <a className={`text-2xl ${boldest} mb-20 text-white relative ${Styles.navItems} ${hover}`}>{children}</a>
      </Link>
    </>
  );
}
