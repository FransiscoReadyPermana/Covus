import React from 'react';
import Link from 'next/link';
import Styles from './navItems.module.css'

export default function NavItems({ children, to }) {
  return (
    <div>
      <Link href= {`${to}`}>
        <a className={`text-2xl font-medium mb-20 text-white relative ${Styles.navItems}`}>{children}</a>
      </Link>
    </div>
  );
}
