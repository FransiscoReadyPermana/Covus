import React, { Component } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from './dropDown.module.css';
import kota from './dataKota';

export default function DropDownEdit({className, value, onChange}) {
  
  return (
    <Dropdown
      options={kota}
      placeholder="Filter"
      className={`text-center ${className}  ${styles.dropDown}`}
      controlClassName={`text-xl font-medium ${styles.dropDownControl}`}
      menuClassName={`font-medium ${styles.menuControl}`}
      arrowClassName={`${styles.myArrowClassName}`}
      arrowOpen={<span className="border-2 border-red-500" />}
      value={value}
      onChange={(e) => onChange(e.value)}
    />
  );
}
