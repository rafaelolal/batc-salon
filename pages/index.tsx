import Link from "next/link";
import { useAppContext } from "../context/state";
import { auth } from "../firebaseConfig";

export default function IndexPage() {
  const { user, setToast } = useAppContext();

  function signOutHandler() {
    auth
      .signOut()
      .then(() => {
        setToast!({ status: 200, message: "Successfully signed out" });
      })
      .catch((error) => {
        setToast!({
          status: 500,
          message: `Error ${error.code}: ${error.message}`,
        });
      });
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
