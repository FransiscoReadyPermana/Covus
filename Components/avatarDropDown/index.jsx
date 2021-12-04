import { useState, useEffect } from "react";
import Image from "next/image";
import style from "./avatarDropDown.module.css";
import { useSession } from "next-auth/client";
import ChevronRight from "../icons/ChevronRight";
import ChevronDown from "./../icons/ChevronDown";

export default function AvatarDropDown({ children }) {
  const [show, setShow] = useState(false);
  const [session] = useSession();

  useEffect(() => {
    if (!show) return;
    const handleClickOutside = () => {
      setShow(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      <button className={`${style.avatar}`} onClick={() => setShow(!show)}>
        <div
          className={`flex items-center bg-white rounded-full ${style.whiteContainer}`}
        >
          <div className={`relative w-7 h-8`}>
            <Image
              src="/images/profile.svg"
              alt="reading-book-image"
              layout="fill"
            />
          </div>
          {/* {session.user.name} */}
          {show}
        </div>
      </button>
      {show && children}
    </>
  );
}
