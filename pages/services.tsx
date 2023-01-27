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
};

export default function ServicesPage(props: ServicesProps) {
  return (
    <>
      <h1 className="mt-5 pt-4 text-center">Services</h1>
      <img className="d-flex mx-auto mb-4" src="/images/swirly.png"></img>

      <div className=" bg-primary px-5">
        <div
          className="row row-cols-1 row-cols-md-2 p-5 mx-5"
          style={{ marginBottom: "150px" }}
        >
          <div className="col">
            <h2 className="text-light">What out costumers</h2>
            <h2 className="text-light">
              are <span className="text-secondary">Loving !</span>
            </h2>

            <p className="text-light">{props.section1.body}</p>
          </div>

          <div className="col">
            <Image
              alt={props.section1.title}
              width="500px"
              height="200px"
              src={props.section1.imgAddr}
            />
          </div>
        </div>
      </div>

      <h2 className="text-primary ps-5 ms-5">{props.section2.title}</h2>
      <div className="bg-primary position-relative" style={{ height: "350px" }}>
        <div className="row row-cols-1 row-cols-md-2 ps-5 pt-2 ">
          <div className="col">
            <p className="text-light">{props.section2.body}</p>
          </div>
          <div className=" position-absolute end-0" style={{ bottom: "70%" }}>
            <Image
              alt={props.section1.title}
              width="500px"
              height="200px"
              src={props.section2.imgAddr}
            />
          </div>
        </div>
      </div>

      <div
        className="bg-primary position-relative"
        style={{ height: "200px", marginBottom: "30%" }}
      >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mx-5 position-absolute">
          <div className="col text-center">
            <Image
              alt={props.offering1.title}
              width="500px"
              height="200px"
              src={props.offering1.imgAddr}
            />
            <br />
            <b>{props.offering1.title}</b>
            <p>{props.offering1.body}</p>
          </div>

          <div className="col text-center">
            <Image
              alt={props.offering2.title}
              width="500px"
              height="200px"
              src={props.offering2.imgAddr}
            />
            <br />
            <b>{props.offering2.title}</b>
            <p>{props.offering2.body}</p>
          </div>

          <div className="col text-center">
            <Image
              alt={props.offering3.title}
              width="500px"
              height="200px"
              src={props.offering3.imgAddr}
            />
            <br />
            <b>{props.offering3.title}</b>
            <p>{props.offering3.body}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
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
    offering3: props_untyped["offering_3"] as SectionPropsType,
  };

  return { props };
};
