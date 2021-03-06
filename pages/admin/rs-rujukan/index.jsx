import React from "react";
import Title from "../../../Components/title";
import styles from "../rsrujukanadmin.module.css";
import Footer from "../../../Components/footer";
import TableData from "../../../Components/table";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import AdminOnly from "../../../Components/adminOnly";

export default function RSRujukan({ data, user }) {
  const router = useRouter();
  const emailAdmin = process.env.ADMIN;

  if (user.name !== "admin" && user.email !== emailAdmin) {
    return (
      <div>
        <AdminOnly />
      </div>
    );
  }
  return (
    <div className="h-full w-full">
      <section id="first" className={`w-full relative h-full mb-36`}>
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className="flex flex-col gap-16 h-full px-24 pt-80 bg-white"
        >
          <Title className="text-center" color="dark-grey">
            DAFTAR RUMAH SAKIT RUJUKAN
          </Title>
          <TableData data={data} type="rs-rujukan" />
        </div>
        <button
          className={`absolute bg-purple text-white py-3 rounded-3xl w-72 mt-24 right-0 top-0 mt-56 mr-20 ${styles.buttonTambah}`}
          onClick={() => router.push("/admin/rs-rujukan/tambah-data")}
        >
          Tambah Data
        </button>
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const baseUrl = process.env.BASE_URL;

  const response = await fetch(`${baseUrl}api/rs-rujukan`);
  const result = await response.json();

  const sortdata = result.data.sort((a, b) =>
    a.provinsi.localeCompare(b.provinsi)
  );

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
      data: sortdata,
      user,
    },
  };
}
