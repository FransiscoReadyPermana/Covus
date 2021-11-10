import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styles from "./dropDown.module.css";
import kota from "./dataKota";

export default function DropDownEdit({ color, className, value, onChange, placeholder, option }) {
  let style;
  let menu;
  if (color === "purple") {
    style = styles.dropDownControlPurple;
    menu = styles.myArrowClassNamePurple;
  }
  if (color === "white") {
    style = styles.dropDownControlWhite;
    menu = styles.myArrowClassNameWhite;
  }
  return (
    <Dropdown
      options={option}
      placeholder={placeholder}
      className={`text-center ${className} ${styles.dropDown}`}
      controlClassName={`text-xl font-medium ${style}`}
      menuClassName={`font-medium ${styles.menuControl}`}
      arrowClassName={`${menu}`}
      arrowOpen={<span className={`border-2 border-red-500 ${style}`} />}
      value={value}
      onChange={(e) => onChange(e.value)}
    />
  );
}
