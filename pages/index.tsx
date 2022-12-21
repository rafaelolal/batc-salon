import Carousel from "../components/carousel";
import QRCode from "../components/QRCode";
import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { CarouselPropsType, QRCodePropsType } from "../types/indexPropsTypes";
import { db } from "../firebaseConfig";

type IndexProps = {
  carousel: CarouselPropsType;
  qRCode: QRCodePropsType;
}

export default function IndexPage(props: IndexProps) {
  return (
    <div className="bg-light">
      <Carousel data={props.carousel} />
      <QRCode data={props.qRCode} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = await getDocs(collection(db, "content"));

  const props_untyped: { [key: string]: CarouselPropsType | QRCodePropsType } = {};
  for (const doc of query.docs) {
    props_untyped[doc.id] = doc.data() as CarouselPropsType | QRCodePropsType;
  }

  const props: IndexProps = {
    carousel: props_untyped["carousel"] as CarouselPropsType,
    qRCode: props_untyped["qRCode"] as QRCodePropsType
  };

  return { props };
};
