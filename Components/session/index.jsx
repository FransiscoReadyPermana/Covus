import { useSession } from "next-auth/client";

export default function Session() {
  const [session, loading] = useSession();
  // console.log(session);

  if (session) {
    return <p>Signed in as {session.user.name}</p>;
  }
}
