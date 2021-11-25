import React from 'react';
import styles from './containerData.module.css';

export default function ContainerData({ title, content, color }) {
  let colorSelect;
  let colorSelectText;

  if (color === "red"){
    colorSelect = styles.red;
    colorSelectText = styles.redText;
  }  
  if (color === "green"){
    colorSelect = styles.green;
    colorSelectText = styles.greenText;
  }  
  if (color === "orange"){
    colorSelect = styles.orange;
    colorSelectText = styles.orangeText;
  } 
  if (color === "dark-green"){
    colorSelect = styles.darkGreen;
    colorSelectText = styles.darkGreenText;
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        id="title"
        className={`${colorSelect} font-medium text-white text-xl py-3 text-center px-28 rounded-full ${styles.top}`}
      >
        {title}
      </div>
      <div
        id="title"
        className={`bg-white ${colorSelectText} text-2xl py-3 text-center px-20 rounded-full ${styles.bottom}`}
      >
        {content}
      </div>
    </div>
  );
}
