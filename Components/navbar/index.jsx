<<<<<<< HEAD
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import AvatarDropDown from '../avatarDropDown';
import AvatarDropDownMenu from '../avatarDropDownMenu';
import Brand from '../brand';
import NavItems from '../navItems';
import PopUpLogin from '../popUpLogin';
import style from './navbar.module.css';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
=======
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
>>>>>>> c35bb16337307087d235b0b8f8debccc3ac75304

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [session] = useSession();
  const [adminEmailSession, setAdminEmailSession] = useState('');

  useEffect(() => {
    if (session) {
      setAdminEmailSession(session.user.email);
    }
  }, [session]);

  const emailAdmin = process.env.ADMIN;

  return (
    <>
      <PopUpLogin
        open={isOpen}
        onClick={() => setIsOpen(false)}
        onClickBackground={() => setIsOpen(false)}
        onClickDaftar={() => {
          setIsOpen(false);
          router.push("/daftar");
        }}
      />
      <div
        className={`flex items-center justify-between bg-dark-grey fixed w-full  ${style.navbar}`}
      >
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
            to="/rs-rujukan"
            isActive={router.pathname === "/rs-rujukan"}
          >
            RS Rujukan
          </NavItems>
          {session ? (
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
          ) : (
            <></>
          )}
<<<<<<< HEAD
          {adminEmailSession === emailAdmin ? (
            <NavItems
              className="ml-4"
              to="/admin"
              isActive={
                router.pathname == '/admin' ||
                router.pathname == '/admin/vaksinasi' ||
                router.pathname == '/admin/vaksinasi/tambah-data' ||
                router.pathname ==
                  '/admin/vaksinasi/peserta-vaksinasi/keseluruhan' ||
                router.pathname == '/admin/vaksinasi/peserta-vaksinasi/[id]' ||
                router.pathname == '/admin/vaksinasi/ubah-data/[id]'
              }
            >
              Admin
            </NavItems>
          ) : (
            <></>
          )}
=======
      
          {/* {session.user.name === "Admin" ? (
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
          ) : (
            <></>
          )} */}

>>>>>>> c35bb16337307087d235b0b8f8debccc3ac75304
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
              <Link href="/daftar" passHref>
                <button
                  type="button"
                  className={`bg-dark-grey py-3 px-10 text-white mr-8 ${style.button_secondary}`}
                >
                  Daftar
                </button>
              </Link>
              <button
                type="button"
                className={`bg-purple py-3 px-10 text-white ${style.button}`}
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
