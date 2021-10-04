import React from 'react'

export default function Title({children, color, className}) {
  let colorSelect = color;

  if (color === 'red') {
    colorSelect = 'red';
  }
  if (color === 'green') {
    colorSelect = 'green';
  }
  if (color === 'orange') {
    colorSelect = 'orange';
  }
  if (color === 'dark-green') {
    colorSelect = 'dark-green';
  } 
  if (color ==='white'){
    colorSelect = 'white '
  }

  return <h1 className={`font-bold text-4xl text-${colorSelect} ${className}`}>{children}</h1>;
}
