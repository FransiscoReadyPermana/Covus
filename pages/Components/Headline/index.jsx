import React from 'react';

export default function Headline({ children, className }) {
  return (
    <div>
      <h1 className={`text-5xl font-bold text-center ${className}`}>{children}</h1>
    </div>
  );
}
