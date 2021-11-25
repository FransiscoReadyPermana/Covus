import React from 'react';

export default function ContainerData({ title, content, color }) {
  let colorSelect;
  let colorSelectText;

  if (color === "red"){
    colorSelect = 'bg-red';
    colorSelectText = 'text-red';
  }  
  if (color === "green"){
    colorSelect = 'bg-green';
    colorSelectText = 'text-green';
  }  
  if (color === "orange"){
    colorSelect = 'bg-orange'; 
    colorSelectText = 'text-orange'; 
  } 
  if (color === "dark-green"){
    colorSelect = 'bg-dark-green';
    colorSelectText = 'text-dark-green';
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        id="title"
        className={`${colorSelect} font-medium text-white text-xl py-3 text-center px-28 rounded-full `}
      >
        {title}
      </div>
      <div
        id="title"
        className={`bg-white font-bold ${colorSelectText} text-2xl py-3 text-center px-20 rounded-full `}
      >
        {content}
      </div>
    </div>
  );
}
