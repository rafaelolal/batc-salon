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

  let i = 0;

  return <>
    <h1>Meet the Stylists!</h1>

    {stylists.map((x) => {
      return <span key={i++}>
        <Stylist name={x.name} img={x.img} />
      </span>;
    })}
  </>;
}
