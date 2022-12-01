import Link from "next/link";
import { auth } from "../firebaseConfig";

export default function Home() {
  function signOutHandler() {
    auth.signOut();
  }

  return (
    <>
      <p>Home page</p>
      <Link href="/login">
        <p>Login</p>
      </Link>
      <Link href="/signUp">
        <p>Sign Up</p>
      </Link>
      {auth.currentUser && (
        <>
          <p>Logged in as: {auth.currentUser.email}</p>
          <button className="btn btn-primary" onClick={signOutHandler}>
            Logout
          </button>
        </>
      )}
    </>
  );
}
