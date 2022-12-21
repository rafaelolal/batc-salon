import Carousel from "../components/carousel";
import QRCode from "../components/QRCode";
import Stylists from "../components/stylists";
import ViewGalleryButton from "../components/viewGalleryButton";
import Footer from "../components/layout/footer";
import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { CarouselPropsType, QRCodePropsType } from "../types/indexPropsTypes";
import { db } from "../firebaseConfig";

type IndexProps = {
  carousel: CarouselPropsType;
  qRCode: QRCodePropsType;
}

export default function IndexPage(props: IndexProps) {
  return (<>
    <div className="index-background">
      <h1>This goes in the background area</h1>
      <p>This is a placeholder</p>
      <p>Note that it wont scroll</p>
      <p>Press Esc to get back to the main page</p>
    </div>

    <div id="index-top" className="top-animated-shown bg-light overflow-auto">
      <Carousel data={props.carousel} />
      <QRCode data={props.qRCode} />
      <Stylists/>
    </div>

    <ViewGalleryButton />

    <div id="index-bottom" className="bottom-animated-shown bg-light overflow-auto">
      <h1>More stuff</h1>
      <Footer />
    </div>
  </>
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
