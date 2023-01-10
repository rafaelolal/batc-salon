import Footer from "../components/layout/footer";
import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { db } from "../firebaseConfig";
import { SectionPropsType } from "../types/servicesPropsTypes";
import Image from "next/image";

type ServicesProps = {
  section1: SectionPropsType;
  section2: SectionPropsType;
}

export default function ServicesPage(props: ServicesProps) {
  return <>
    <h1>Services</h1>

    <div className="bg-primary">
      <h2>{props.section1.title}</h2>
      <p>{props.section1.body}</p>
      <Image width="500px" height="200px" src={props.section1.imgAddr}/>
    </div>

    <h2>{props.section2.title}</h2>
    <div className="bg-primary">
      <p>{props.section2.body}</p>
      <Image width="500px" height="200px" src={props.section2.imgAddr}/>
      <h2>We also offer</h2>
    </div>
    <Footer/>
  </>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = await getDocs(collection(db, "content"));

  const props_untyped: { [key: string]: SectionPropsType } = {};
  for (const doc of query.docs) {
    props_untyped[doc.id] = doc.data() as SectionPropsType;
  }

  const props: ServicesProps = {
    section1: props_untyped["services_1"] as SectionPropsType,
    section2: props_untyped["services_2"] as SectionPropsType
  };

  return { props };
};
