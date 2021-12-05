import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../admin.module.css';
import Title from '../../Components/title';
import Footer from '../../Components/footer';
import Card from '../../Components/card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import AdminOnly from '../../Components/adminOnly';

export default function Admin({user}) {
  const router = useRouter();
  const emailAdmin = process.env.ADMIN;

  if (user.name !== 'admin' && user.email !== emailAdmin) {
    return (
      <div>
        <AdminOnly />
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <section
        id="first"
        className={`${styles.section1} w-full relative mb-16`}
      >
        <div
          id="divider"
          className={`${styles.bgFirstSection} h-40 w-full absolute -top-40 transform rotate-180 mt-60`}
        />

        <div
          id="content"
          className={`flex flex-col items-center h-full px-64 gap-12 pt-80 bg-white pb-16 ${styles.content}`}
        >
          <Title color="dark-grey">PENGELOLAAN COVUS</Title>
          <div
            id="card containter"
            className="w-full h-full flex flex-row justify-center items-center gap-16"
          >
            <button
              onClick={() => router.push('/admin/vaksinasi')}
              className="w-1/4"
            >
              <Card type="big" className={`w-full h-full ${styles.card}`}>
                <div className="relative h-3/4 w-full flex flex-col mt-8">
                  <Image
                    src="/images/vaksinasi.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  Vaksinasi
                </p>
              </Card>
            </button>

            <button
              onClick={() => router.push('/admin/rs-rujukan')}
              className="w-1/4"
            >
              <Card type="big" className={`w-full h-full ${styles.card}`}>
                <div className="relative h-3/4 w-full flex flex-col mt-8">
                  <Image
                    src="/images/rumah_sakit.svg"
                    alt="reading-book-image"
                    layout="fill"
                  />
                </div>
                <p
                  color="dark-grey"
                  className="text-center font-semibold text-2xl text-dark-grey"
                >
                  RS Rujukan
                </p>
              </Card>
            </button>
          </div>
        </div>
      </section>
      <Footer color="purple" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const user = session.user;

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}
