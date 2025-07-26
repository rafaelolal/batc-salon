import Footer from "../components/layout/footer";
import { collection, getDocs } from "firebase/firestore";
import { GetServerSideProps } from "next";
import { db } from "../firebaseConfig";
import { SectionPropsType } from "../types/servicesPropsTypes";
import Image from "next/future/image";

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
      <h1 className="mt-5 pt-5 text-center">Services</h1>
      <Image
        className="d-flex mx-auto mb-4"
        width="211"
        height="30"
        alt=""
        src="/batc/images/swirly.png"
      />

      <div className=" bg-primary px-2 px-md-4">
        <div
          className="row row-cols-1 row-cols-lg-2 p-2 p-md-5 mx-5"
          style={{ marginBottom: "15%" }}
        >
          <div className="col">
            <h1 className="text-light text-center text-lg-start me-0 me-lg-5">
              What out costumers
            </h1>
            <h1 className="text-light  text-center text-lg-start me-0 me-lg-5">
              are <span className="text-secondary">Loving !</span>
            </h1>

            <p className="text-light  text-center text-lg-start me-0 me-lg-5">
              {props.section1.body}
            </p>
          </div>

          <div className="col d-flex">
            <div
              className="card rounded-0 border-0 mx-auto my-auto"
              style={{ boxShadow: "0 0 15px rgba(0,0,0, 0.4)", width: "90%" }}
            >
              <Image
                alt={props.section1.title}
                width="900"
                height="600"
                src={"/batc" + props.section1.imgAddr}
                style={{
                  width: "100%",
                  height: "auto",
                  boxShadow: "0 0 15px rgba(0,0,0, 0.4)",
                }}
              />
              <div
                className="card-img-overlay m-2 rounded-0"
                style={{ border: "2px solid #286b3e" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 px-md-4">
        <h1
          className="text-primary text-end px-2 mx-5 px-md-4 d-none d-lg-block
        
        
        "
        >
          {props.section2.title}
        </h1>
      </div>
      <div className="bg-primary  px-2 px-md-4">
        <div className="row row-cols-1 row-cols-lg-2 px-2 pb-1 px-md-4 pb-md-2 mx-5 pt-2 ">
          <div className=" col position-relative">
            <div className="section2Image card rounded-0 border-0">
              <Image
                alt={props.section1.title}
                width="900"
                height="600"
                src={"/batc" + props.section2.imgAddr}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div
                className="card-img-overlay m-2 rounded-0"
                style={{ border: "2px solid #286b3e" }}
              ></div>
            </div>
          </div>
          <div className="col ">
            <p className="text-light text-center text-lg-end ps-0 ps-lg-5">
              {props.section2.body}
            </p>
          </div>
        </div>
      </div>

      <div
        className="position-relative p-2 p-md-5"
        style={{
          background: "linear-gradient(180deg, #286b3e 20% 50%, #f6f2f1 50%)",
        }}
      >
        <h1 className="text-light text-center mt-5">We Also Offer</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center m-5 p-2 p-md-5">
          <div className="col text-center my-5 my-md-0">
            <div
              className="card rounded-0 border-0"
              style={{ boxShadow: "0 0 15px rgba(0,0,0, 0.4)" }}
            >
              <Image
                alt={props.offering1.title}
                width="375"
                height="250"
                src={"/batc" + props.offering1.imgAddr}
                style={{ width: "100%", height: "auto" }}
              />
              <div
                className="card-img-overlay m-2 rounded-0"
                style={{ border: "2px solid #286b3e" }}
              ></div>
            </div>
            <br />
            <h6>{props.offering1.title}</h6>
            <p className="text-secondary px-1 px-lg-5">
              {props.offering1.body}
            </p>
          </div>

          <div className="col text-center my-5 my-md-0">
            <div
              className="card rounded-0 border-0"
              style={{ boxShadow: "0 0 15px rgba(0,0,0, 0.4)" }}
            >
              <Image
                alt={props.offering2.title}
                width="375"
                height="250"
                src={"/batc" + props.offering2.imgAddr}
                style={{ width: "100%", height: "auto" }}
              />
              <div
                className="card-img-overlay m-2 rounded-0"
                style={{ border: "2px solid #286b3e" }}
              ></div>
            </div>
            <br />
            <h6>{props.offering2.title}</h6>
            <p className="text-secondary px-1 px-lg-5">
              {props.offering2.body}
            </p>
          </div>

          <div className="col text-center my-5 my-md-0 ">
            <div
              className="card rounded-0 border-0"
              style={{ boxShadow: "0 0 15px rgba(0,0,0, 0.4)" }}
            >
              <Image
                alt={props.offering3.title}
                width="375"
                height="250"
                src={"/batc" + props.offering3.imgAddr}
                style={{ width: "100%", height: "auto" }}
              />
              <div
                className="card-img-overlay m-2 rounded-0"
                style={{ border: "2px solid #286b3e" }}
              ></div>
            </div>
            <br />
            <h6>{props.offering3.title}</h6>
            <p className="text-secondary px-1 px-lg-5">
              {props.offering3.body}
            </p>
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
