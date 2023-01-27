import { TestimonialType } from "../types/testimonial";
import Testimonial from "./testimonial";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useAppContext } from "../context/state";
import Image from "next/future/image";

export default function Testimonials() {
  const addToast = useAppContext().addToast;
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

  useEffect(() => {
    getDocs(collection(db, "testimonials")).then(
      (result) => {
        const docs = result.docs;

        setTestimonials(
          docs.map((x) => {
            return x.data() as TestimonialType;
          })
        );
      },
      (error) => {
        addToast({ status: 500, message: error });
      }
    );
  }, [addToast]);

  const testimonial_components = [];
  for (let i = 0; i < testimonials.length; i++) {
    testimonial_components.push(
      <div className="col-12 col-sm-6 col-md-4 col-xl-3 my-3">
        <Testimonial testimonial={testimonials[i]} />
      </div>
    );
  }

  return (
    <div className="col-12 my-5">
      <h1 className="text-center text-primary">Testimonials</h1>
      <Image className="d-flex mx-auto mb-4" width="211" height="30" alt="" src="/images/swirly.png"/>

      <div className="row mx-2 justify-content-center">
        {testimonial_components}
      </div>
    </div>
  );
}
