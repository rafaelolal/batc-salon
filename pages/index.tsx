import { app } from "../firebaseConfig";
import { getFirestore, collection, getDocs, QuerySnapshot, DocumentData } from "firebase/firestore";
import { useState } from "react";

export default function IndexPage() {
  const [query, setQuery] = useState<QuerySnapshot<DocumentData> | null>(null);
  const db = getFirestore(app);

  getDocs(collection(db, "test")).then(
    function(result) {
      setQuery(result);
    },
    function(error) {
      throw error;
    }
  );

  return (<>
    <h1>Hello World</h1>

    <p>{query?.docs[0].data().Name}</p>
    <p>{query?.docs[1].data().Name}</p>
  </>);
}
