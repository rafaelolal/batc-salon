import { db, auth } from "../firebaseConfig";
import { useAppContext } from "../context/state";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { GetServerSideProps } from "next";

type IndexProps = {
  query: string[]
}

export default function IndexPage(props: IndexProps) {
  const { user, addToast } = useAppContext();

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
  if(props.query == null) {
    dbList = null;
  } else {
    dbList = props.query.map((name) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const query = await getDocs(collection(db, "test"));
  const result: string[] = query.docs.map((doc) => {
    const name: string = doc.data().Name;
    return name;
  });

  const props: IndexProps = { query: result };
  return { props };
};
