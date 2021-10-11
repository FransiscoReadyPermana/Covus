import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './dropDown.module.css';
import kota from './dataKota';

export default function DropDownEdit({className}) {
  return (
    <Dropdown
      options={kota}
      placeholder="Filter"
      className={`text-center ${className}  ${styles.dropDown}`}
      controlClassName={`text-xl font-medium bg-purple ${styles.dropDownControl}`}
      menuClassName={`font-medium ${styles.menuControl}`}
      arrowClassName={`${styles.myArrowClassName}`}
      arrowOpen={<span className={`${styles.myArrowClassNameOpen}`} />}
    />
  );
}
