import React from 'react';

export default function ContainerData({title, content, color}) {
  return (
    <div className="flex flex-col gap-4">
        <div id="title" className={`bg-${color} font-medium text-white text-2xl py-3 text-center w-96 rounded-full `}>
            {title}
        </div>
        <div id="title" className={`bg-white font-medium text-${color} text-2xl py-3 text-center w-96 rounded-full `}>
            {content}
        </div>
    </div>
  );
}
