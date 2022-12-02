import { db, auth } from "../firebaseConfig";
import { useAppContext } from "../context/state";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function IndexPage() {
  const [query, setQuery] = useState<string[]>([]);
  const { user, addToast } = useAppContext();

  console.log("rendering index");

  useEffect(() => {
    console.log("calling useEffect for firestore query");
    getDocs(collection(db, "test")).then(
      (result) => {
        console.log("set query");
        setQuery(result.docs.map((doc) => {
          const name: string = doc.data().Name;
          return name;
        }));
      },
      (error) => {
        addToast({ status: 500, message: `Error: ${error}` });
      }
    );
  }, [addToast]);

  function signOutHandler() {
    auth
      .signOut()
      .then(() => {
        console.log("SIGNED OUT");
        addToast({ status: 200, message: "Successfully signed out" });
      })
      .catch((error) => {
        addToast({
          status: 500,
          message: `Error ${error.code}: ${error.message}`,
        });
      });
  }

  let dbList;
  if(query == null) {
    dbList = null;
  } else {
    dbList = query.map((name) => {
      return <li key={name}>{name}</li>;
    });
  }

  return <>
    <h1>Firestore Stuff</h1>
    <ul>{dbList}</ul>

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
