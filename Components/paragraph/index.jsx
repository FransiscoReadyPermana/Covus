import React from 'react';

export default function Paragraph({ children, color, size, className }) {
  let colorSelect;
  let sizeSelect;
  if (color === 'dark-grey') {
    colorSelect = 'dark-grey';
  }
  if (color === 'white') {
    colorSelect = 'white ';
  }

  if (size === 'xl'){
    sizeSelect = 'xl'
  }
  if (size === '2xl'){
    sizeSelect = '2xl'
  }

  return (
    <p
      className={`font-semibold text-${colorSelect} text-${sizeSelect} w-full ${className} leading-relaxed`}
    >
      {children}
    </p>
  );
}
