import Carousel from "../components/carousel";
import QRCode from "../components/QRCode";
import Stylists from "../components/stylists";
import ViewGalleryButton from "../components/viewGalleryButton";
import Gallery from "../components/gallery";
import Footer from "../components/layout/footer";
import { collection, getDocs } from "firebase/firestore";
import { GetStaticProps } from "next";
import { CarouselPropsType, QRCodePropsType } from "../types/indexPropsTypes";
import { db } from "../firebaseConfig";
import Testimonials from "../components/testimonials";

type IndexProps = {
  carousel: CarouselPropsType;
  qRCode: QRCodePropsType;
  galleryUrls: string[];
};

export default function IndexPage(props: IndexProps) {
  return (<>
    <div className="index-background">
      <Gallery />
    </div>

      <div id="index-top" className="top-animated-shown bg-light overflow-auto">
        <Carousel data={props.carousel} />
        <QRCode data={props.qRCode} />
        <Stylists />
      </div>

      <ViewGalleryButton />

      <div
        id="index-bottom"
        className="bottom-animated-shown bg-light overflow-hidden"
      >
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const query = await getDocs(collection(db, "content"));

  const props_untyped: { [key: string]: CarouselPropsType | QRCodePropsType } =
    {};
  for (const doc of query.docs) {
    props_untyped[doc.id] = doc.data() as CarouselPropsType | QRCodePropsType;
  }

<<<<<<< HEAD
  const galleryImgsRef = ref(storage, "gallery-imgs");
  const imgs = await listAll(galleryImgsRef);
  const img_urls: string[] = [];
  for (const img of imgs.items) {
    const url = await getDownloadURL(img);
    console.log(url);
    img_urls.push(url);
  }

  const props: IndexProps = {
    carousel: props_untyped["carousel"] as CarouselPropsType,
    qRCode: props_untyped["qRCode"] as QRCodePropsType,
    galleryUrls: img_urls,
=======
  const props: IndexProps = {
    carousel: props_untyped["carousel"] as CarouselPropsType,
    qRCode: props_untyped["qRCode"] as QRCodePropsType
>>>>>>> b2fd7d9534f492ba74aee7a0c324b0e29e17c6ed
  };

  return { props, revalidate: 600 }; // Revalidate every 10 min (600 sec)
};
