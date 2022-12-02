import { app, db, auth } from "../firebaseConfig";
import { useAppContext } from "../context/state";
import { collection, getDocs, QuerySnapshot, DocumentData } from "firebase/firestore";
import { useState } from "react";
import Link from "next/link";

export default function IndexPage() {
  const [query, setQuery] = useState<QuerySnapshot<DocumentData> | null>(null);
  const { user, addToast } = useAppContext();

  getDocs(collection(db, "test")).then(
    function(result) {
      setQuery(result);
    },
    function(error) {
      throw error;
    }
  );

  function signOutHandler() {
    auth
      .signOut()
      .then(() => {
        console.log("SIGNED OUT");
        addToast!({ status: 200, message: "Successfully signed out" });
      })
      .catch((error) => {
        addToast!({
          status: 500,
          message: `Error ${error.code}: ${error.message}`,
        });
      });
  }

  return <>
    <h1>Firestore Stuff</h1>
    <p>{query?.docs[0].data().Name}</p>
    <p>{query?.docs[1].data().Name}</p>

    <hr/>

    <h1>Auth Stuff</h1>
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
  </>;
}
