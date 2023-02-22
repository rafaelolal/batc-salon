import { collection, getDocs } from "firebase/firestore";
import { MutableRefObject, useRef, useState } from "react";
import { useAppContext } from "../context/state";
import { db } from "../firebaseConfig";

const correctKey = "admin";

export default function Dashboard(props: any) {
  const { addToast } = useAppContext();
  const [locked, setLocked] = useState(true);
  const [rick, setRick] = useState(false);
  const myElements = useRef<JSX.Element[]>([]);

  const keyRef = useRef() as MutableRefObject<HTMLInputElement>;

  console.log({ props });

  function signInHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (keyRef.current.value != correctKey) {
      addToast({ status: 403, message: "Incorrect key" });
      return;
    }

    setLocked(false);
    eachRecursive(props, 1);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRick(true);
  }

  function eachRecursive(obj: any, level: number) {
    for (const k in obj) {
      if (typeof obj[k] == "object" && obj[k] !== null) {
        if (level == 1) {
          myElements.current.push(<h1 className="mb-1 mt-4">{k}</h1>);
        }
        if (level == 2) {
          myElements.current.push(
            <h2 className={`mb-1 mt-4 ms-${level + 1}`}>{k}</h2>
          );
        }
        if (level == 3) {
          myElements.current.push(
            <h3 className={`mb-1 mt-4 ms-${level + 1}`}>{k}</h3>
          );
        }
        if (level == 4) {
          myElements.current.push(
            <h4 className={`mb-1 mt-4 ms-${level + 1}`}>{k}</h4>
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
    // for (let i = 0; i < myElements.current.length - 1; i++) {
    //   if (
    //     myElements.current[i].type.includes("h") &&
    //     myElements.current[i + 1].type.includes("input")
    //   ) {
    //     myElements.current.push(
    //       <button className="btn btn-primary my-3" type="submit">
    //         Add New
    //       </button>
    //     );
    //   }
    // }
  }

  if (rick) {
    return (
      <div className="d-flex" style={{ height: "94vh" }}>
        {/* <video
          className="mx-auto my-auto"
          autoPlay
          style={{ width: "854px", height: "480" }}
        >
          <source src="/rick.mp4" type="video/mp4" />
        </video> */}
      </div>
    );
  }

  if (locked) {
    return (
      <form
        className="d-flex"
        style={{ height: "94vh" }}
        onSubmit={signInHandler}
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
      <form className="container mt-5" onSubmit={handleSubmit}>
        {myElements.current}
        <button
          // type="submit"
          type="button"
          className="btn btn-primary my-5"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export async function getServerSideProps() {
  const props: any = { content: {}, stylists: {}, testimonials: {} };
  const collectionNames = Object.keys(props);
  const collections = await Promise.all(
    Object.keys(props).map((col) => getDocs(collection(db, col)))
  );

  for (let i = 0; i < collectionNames.length; i++) {
    for (const doc of collections[i].docs)
      props[collectionNames[i]][doc.id] = doc.data();
  }

  return { props: JSON.parse(JSON.stringify(props)) };
}
