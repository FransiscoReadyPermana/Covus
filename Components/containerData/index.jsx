import React from 'react';

export default function ContainerData({ title, content, color }) {
  let colorSelect = color;

  if (color === "red"){
    colorSelect = "red";
  }  
  if (color === "green"){
    colorSelect = "green";
  }  
  if (color === "orange"){
    colorSelect = "orange"; 
  } 
  if (color === "dark-green"){
    colorSelect = "dark-green"
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        id="title"
        className={`bg-${colorSelect} font-medium text-white text-xl py-3 text-center px-28 rounded-full `}
      >
        {title}
      </div>
      <div
        id="title"
        className={`bg-white font-bold text-${colorSelect} text-2xl py-3 text-center px-28  rounded-full `}
      >
        {content}
      </div>
    </div>
  );
}
