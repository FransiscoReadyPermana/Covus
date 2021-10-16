import React from 'react';
import Link from 'next/link';
import Styles from './navItems.module.css'

export default function NavItems({ children, to, isActive }) {
  let hover;
  let boldest;

  if (isActive) {
    hover = Styles.navItemsActive
    boldest = "bold"
  } else {
    boldest="medium"
  }

  return (
    <div>
      <Link href= {`${to}`}>
        <a className={`text-2xl font-${boldest} mb-20 text-white relative ${Styles.navItems} ${hover}`}>{children}</a>
      </Link>
    </div>
  );
}
