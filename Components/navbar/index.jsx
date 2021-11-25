import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import AvatarDropDown from "../avatarDropDown";
import AvatarDropDownMenu from "../avatarDropDownMenu";
import Brand from "../brand";
import Button from "../button";
import NavItems from "../navItems";
import PopUpLogin from "../popUpLogin";
import style from "./navbar.module.css";
import Session from "../session";
import { useSession } from "next-auth/client";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [session] = useSession();

  return (
    <>
      <PopUpLogin
        open={isOpen}
        onClick={() => setIsOpen(false)}
        onClickBackground={() => setIsOpen(false)}
        onClickDaftar={() => {
          setIsOpen(false);
          router.push("/signUp");
        }}
      />
      <div className={`flex items-center justify-between bg-dark-grey fixed w-full  ${style.navbar}`}>
        <div id="left" className="flex items-center gap-12">
          <Brand />
          <NavItems className="ml-4" to="/" isActive={router.pathname === "/"}>
            Beranda
          </NavItems>
          <NavItems
            className="ml-4"
            to="/informasi"
            isActive={router.pathname === "/informasi"}
          >
            Informasi
          </NavItems>
          <NavItems
            className="ml-4"
            to="/edukasi"
            isActive={router.pathname === "/edukasi"}
          >
            Edukasi
          </NavItems>
          <NavItems
            className="ml-4"
            to="/RsRujukan"
            isActive={router.pathname === "/RsRujukan"}
          >
            RS Rujukan
          </NavItems>
          <NavItems
            className="ml-4"
            to="/vaksinasi"
            isActive={
              router.pathname == "/vaksinasi" ||
              router.pathname ==
                "/vaksinasi/lokasi-vaksinasi/[jenis_vaksin]/[nama]" ||
              router.pathname == "/vaksinasi/validasi-vaksinasi/[id_vaksin]"
            }
          >
            Vaksinasi
          </NavItems>

          <NavItems
            className="ml-4"
            to="/tentang-kami"
            isActive={router.pathname == "/tentang-kami"}
          >
            Tentang Kami
          </NavItems>
        </div>
        <div id="right" className="flex justify-items-center">
          {session ? (
            <AvatarDropDown>
              <AvatarDropDownMenu />
            </AvatarDropDown>
          ) : (
            <div className="flex flex-row">
              <Link href="/signUp" passHref>
                <button
                  type="button"
                  className={`bg-dark-grey py-3 px-10 text-white rounded-xl mr-8 ${style.button_secondary}`}
                >
                  Daftar
                </button>
              </Link>
              <button
                type="button"
                className={`bg-purple py-3 px-10 text-white rounded-xl ${style.button}`}
                onClick={() => setIsOpen(true)}
              >
                Masuk
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
