import React from 'react';
import PopUpLogin from '../../Components/popUpLogin';
import { useState } from 'react';

export default function Login() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <PopUpLogin
        open={isOpen}
        onClick={() => setIsOpen(false)}
        onClickBackground={() => setIsOpen(false)}
        onClickDaftar={() => {
          setIsOpen(false);
          router.push('/signUp');
        }}
      />
    </div>
  );
}
