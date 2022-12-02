import Link from "next/link";
import { useAppContext } from "../context/state";
import { auth } from "../firebaseConfig";

export default function IndexPage() {
  const { user } = useAppContext();

  function signOutHandler() {
    console.log(user!.email);
    auth.signOut();
    console.log("SIGNED OUT");
  }

  return (
    <>
      <p>Home page</p>
      <Link href="/signIn">
        <p>Sign In</p>
      </Link>
      <Link href="/signUp">
        <p>Sign Up</p>
      </Link>
      <p>Signed in: {Boolean(user).toString()}</p>
      {user && (
        <>
          <p>Logged in as: {user.email}</p>
        </>
      )}
      <button className="btn btn-primary" onClick={signOutHandler}>
        Sign Out
      </button>
    </>
  );
}
