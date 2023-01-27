import { collection, getDocs } from "firebase/firestore";
import { MutableRefObject, useRef, useState } from "react";
import { useAppContext } from "../context/state";
import { db } from "../firebaseConfig";

const correctKey = "admin";

export default function Dashboard(props) {
  const { addToast } = useAppContext();
  const [locked, setLocked] = useState(true);
  const myElements = useRef(new Array());

  const keyRef = useRef() as MutableRefObject<HTMLInputElement>;

  console.log({ props });

  function submitHandler(event) {
    event.preventDefault();

    if (keyRef.current.value != correctKey) {
      addToast({ status: 403, message: "Incorrect key" });
      return;
    }

    setLocked(false);
    eachRecursive(props, 1);
  }

  function eachRecursive(obj, level) {
    for (var k in obj) {
      if (typeof obj[k] == "object" && obj[k] !== null) {
        if (level == 1) {
          myElements.current.push(<h1 className="mb-1">{k}</h1>);
        }
        if (level == 2) {
          myElements.current.push(
            <h2 className={`mb-1 ms-${level + 1}`}>{k}</h2>
          );
        }
        if (level == 3) {
          myElements.current.push(
            <h3 className={`mb-1 ms-${level + 1}`}>{k}</h3>
          );
        }
        if (level == 4) {
          myElements.current.push(
            <h4 className={`mb-1 ms-${level + 1}`}>{k}</h4>
          );
        }
        eachRecursive(obj[k], level + 1);
      } else {
        myElements.current.push(
          <input
            className={`mb-1 form-control ms-${level + 1}`}
            type="text"
            defaultValue={obj[k]}
            id={myElements.current.length.toString()}
          />
        );
      }
    }
  }

  if (locked) {
    return (
      <form
        className="d-flex"
        style={{ height: "94vh" }}
        onSubmit={submitHandler}
      >
        <div className="my-auto mx-auto">
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              placeholder="Key"
              aria-label="Key"
              aria-describedby="keyInputLabel"
              required
              ref={keyRef}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <>
      <form className="container mt-5">{myElements.current}</form>
    </>
  );
}

export async function getServerSideProps() {
  const props = { content: {}, stylists: {}, testimonials: {} };
  const collectionNames = Object.keys(props);
  const collections = await Promise.all(
    Object.keys(props).map((col) => getDocs(collection(db, col)))
  );

  for (let i = 0; i < collectionNames.length; i++) {
    for (let doc of collections[i].docs)
      props[collectionNames[i]][doc.id] = doc.data();
  }

  return { props: JSON.parse(JSON.stringify(props)) };
}
