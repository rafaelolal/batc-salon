import { MutableRefObject, useRef, useState } from "react";
import { useAppContext } from "../context/state";

const correctKey = "admin";

export default function Dashboard() {
  const { addToast } = useAppContext();
  const [locked, setLocked] = useState(true);
  const keyRef = useRef() as MutableRefObject<HTMLInputElement>;

  function submitHandler() {
    if (keyRef.current.value != correctKey) {
      addToast({ status: 403, message: "Incorrect key" });
      return;
    }

    setLocked(false);
  }

  if (locked) {
    return (
      <div className="d-flex" style={{ height: "94vh" }}>
        <div className="my-auto mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Key"
              aria-label="Key"
              aria-describedby="keyInputLabel"
              ref={keyRef}
            />
            <button type="submit" className="btn btn-primary" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <p>Dashboard</p>;
}
