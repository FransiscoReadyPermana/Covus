import { getSession } from 'next-auth/client';

export default function Admin({ user }) {
  console.log('ini dari session ' + user);
  if (
    user.name !== "Admin" &&
    user.email !== process.env.ADMIN_EMAIL
  ) {
    return (
      <div className="pt-40">
        <p>You are not authorized to access this page</p>;
      </div>
    );
  }
  return (
    <div className="pt-40">
      <p>berhasil</p>
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
