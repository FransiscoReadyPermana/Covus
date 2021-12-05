import React from "react";
import { useState, useEffect } from "react";
import Title from "../../../../Components/title";
import styles from "../../tambah.module.css";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import AdminOnly from "../../../../Components/adminOnly";
import Footer from "../../../../Components/footer";

export default function UbahData({ data, id, user }) {
  const router = useRouter();
  const emailAdmin = process.env.ADMIN;

  if (user.name !== "admin" && user.email !== emailAdmin) {
    return (
      <div>
        <AdminOnly />
      </div>
    );
  }

  const [formUser, setFormUser] = useState({
    provinsi: data[0].provinsi,
    nama: data[0].nama,
    alamat: data[0].alamat,
    telp: data[0].telp,
  });

  const handleRegister = async (e) => {
    // checkInput(e);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      _id: id,
      provinsi: formUser.provinsi,
      nama: formUser.nama,
      alamat: formUser.alamat,
      telp: formUser.telp,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const baseUrl = process.env.BASE_URL;

    const response = await fetch(`${baseUrl}api/rs-rujukan`, requestOptions);
    const result = await response.json();

    if (result.success) {
      alert("Berhasil");
      router.push("/admin/rs-rujukan");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="h-screen w-full">
      <section id="first" className={`${styles.section1} w-full relative`}>
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className="w-full flex flex-col items-center h-full pt-80 bg-white pb-20"
        >
          <Title color="dark-grey">TAMBAH DATA RUMAH SAKIT RUJUKAN</Title>
          <form action="#" className={`flex flex-col gap-8 ${styles.form}`}>
            <div id="provinsi">
              <label htmlFor="provinsi">Nama Provinsi</label>
              <input
                type="text"
                id="provinsi"
                defaultValue={data[0].provinsi}
                onChange={(e) =>
                  setFormUser({ ...formUser, provinsi: e.target.value })
                }
              />
              {/* {errorNama && <p className="mt-2 ml-2 text-red">{errorNama}</p>} */}
            </div>
            <div id="rs">
              <label htmlFor="email">Nama Rumah Sakit</label>
              <input
                type="text"
                id="nama"
                defaultValue={data[0].nama}
                onChange={(e) =>
                  setFormUser({ ...formUser, nama: e.target.value })
                }
              />
              {/* {errorEmail && <p className="mt-2 ml-2 text-red">{errorEmail}</p>} */}
            </div>

            <div id="address">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="alamat"
                placeholder="Masukkan Alamat"
                defaultValue={data[0].alamat}
                onChange={(e) =>
                  setFormUser({ ...formUser, alamat: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <div id="telp">
              <label htmlFor="telpon">Nomor Telepon</label>
              <input
                type="text"
                id="telpon"
                placeholder="Masukkan Nomor Telepon"
                defaultValue={data[0].telp}
                onChange={(e) =>
                  setFormUser({ ...formUser, telp: e.target.value })
                }
              />
              {/* {errorAlamat && (
                <p className="mt-2 ml-2 text-red">{errorAlamat}</p>
              )} */}
            </div>

            <input
              type="submit"
              value="Tambah Data Vaksinasi"
              className="bg-purple text-white py-3 rounded-3xl mt-4"
              onClick={(e) => {
                handleRegister(e);
              }}
            />
          </form>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const baseUrl = process.env.BASE_URL;

  const response = await fetch(`${baseUrl}api/rs-rujukan`);
  const result = await response.json();
  const data = result.data.filter((item) => item._id === id);
  const session = await getSession({ req: context.req });
  const user = session.user;

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  
  return {
    props: {
      data,
      id,
      user,
    },
  };
}
