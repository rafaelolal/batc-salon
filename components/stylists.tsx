import Stylist from "./stylist";
import { StylistProps } from "./stylist";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/state";

export default function Stylists() {
  const addToast = useAppContext().addToast;
  const [stylists, setStylists] = useState<StylistProps[]>([]);

  useEffect(() => {
    getDocs(collection(db, "stylists")).then(
      (result) => {
        const docs = result.docs;

        setStylists(
          docs.map((x) => {
            return x.data() as StylistProps;
          })
        );
      },
      (error) => {
        addToast({ status: 500, message: error });
      }
    );
  }, [addToast]);

  return (
    <div className="py-5" style={{ overflow: "hidden" }}>
      <h1 className="text-center my-3 fs-3 text-primary">Meet the Stylists!</h1>
      <div className="row justify-content-center flex-nowrap" style={{ overflowX: "scroll" }}>
        {stylists.map((x, i) => (
          <Stylist key={i} name={x.name} img={x.img} />
        ))}
      </div>
    </div>
  );
}
