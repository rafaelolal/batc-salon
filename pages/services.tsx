import Footer from "../components/layout/footer";
import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { db } from "../firebaseConfig";
import { SectionPropsType } from "../types/servicesPropsTypes";
import Image from "next/image";

type ServicesProps = {
  section1: SectionPropsType;
  section2: SectionPropsType;
  offering1: SectionPropsType;
  offering2: SectionPropsType;
  offering3: SectionPropsType;
}

export default function ServicesPage(props: ServicesProps) {
  return <>
    <h1 className = "services">Services</h1>

    <div className="bg-primary">
      <h2 className="text-center text-secondary">{props.section1.title}</h2>
      <p>{props.section1.body}</p>
      <Image alt={props.section1.title} width="500px" height="200px" src={props.section1.imgAddr}/>
    </div>

    <h2 className="text-center">{props.section2.title}</h2>
    <div className="bg-primary">
      <p>{props.section2.body}</p>
      <Image alt={props.section1.title} width="500px" height="200px" src={props.section2.imgAddr}/>
      <h2 className="text-center text-secondary">We also offer</h2>
    </div>

    <div className="row">
      <div className="col">
        <Image alt={props.offering1.title} width="500px" height="200px" src={props.offering1.imgAddr}/><br/>
        <b>{props.offering1.title}</b>
        <p>{props.offering1.body}</p>
      </div>

      <div className="col">
        <Image alt={props.offering2.title} width="500px" height="200px" src={props.offering2.imgAddr}/><br/>
        <b>{props.offering2.title}</b>
        <p>{props.offering2.body}</p>
      </div>

      <div className="col">
        <Image alt={props.offering3.title} width="500px" height="200px" src={props.offering3.imgAddr}/><br/>
        <b>{props.offering3.title}</b>
        <p>{props.offering3.body}</p>
      </div>
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
    section2: props_untyped["services_2"] as SectionPropsType,
    offering1: props_untyped["offering_1"] as SectionPropsType,
    offering2: props_untyped["offering_2"] as SectionPropsType,
    offering3: props_untyped["offering_3"] as SectionPropsType
  };

  return { props };
};
