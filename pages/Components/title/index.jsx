import React from 'react'

export default function Title({children, color}) {
  return <h1 className={`font-bold text-4xl text-${color} text-center`}>{children}</h1>;
}
