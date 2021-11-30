import React from 'react'
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex h-screen justify-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/loading.gif"
          alt="Loading..."
          width="200"
          height="200"
        />
        <p>loading...</p>
      </div>
    </div>
  );
}
