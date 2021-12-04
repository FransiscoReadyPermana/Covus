import { useSession } from "next-auth/client";

export default function Session() {
  const [session, loading] = useSession();
  if (session) {
    return <p>Signed in as {session.user.name}</p>;
  }
}
