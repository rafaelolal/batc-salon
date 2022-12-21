import Carousel from "../components/carousel";
import QRCode from "../components/QRCode";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { CarouselPropsType, QRCodePropsType } from "../types/indexPropsTypes";
import { useAppContext } from "../context/state";
import { db } from "../firebaseConfig";

export default function IndexPage(props: {
  carousel: CarouselPropsType;
  qRCode: QRCodePropsType;
}) {
  const { user, addToast } = useAppContext();

  return (
    <div className="bg-light">
      <Carousel data={props.carousel} />
      <QRCode data={props.qRCode} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = await getDocs(collection(db, "content"));

  const props: IndexProps = {};
  for (const doc of query.docs) {
    props[doc.id] = doc.data();
  }

  return { props };
};
