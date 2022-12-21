import { TestimonialType } from "../types/testimonial";
import Testimonial from "./testimonial";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useAppContext } from "../context/state";

export default function Testimonials() {
  const addToast = useAppContext().addToast;
  const [ testimonials, setTestimonials ] = useState<TestimonialType[]>([]);
  
  useEffect(() => {
    getDocs(collection(db, "testimonials")).then(
      (result) => {
        const docs = result.docs;

        setTestimonials(docs.map((x) => {
          return x.data() as TestimonialType;
        }));
      },
      (error) => {
        addToast({ status: 500, message: error });
      }
    );
  }, [addToast]);

  const testimonial_components = [];
  for(let i = 0; i < testimonials.length; i++) {
    testimonial_components.push(<div className="col-3">
      <Testimonial testimonial={testimonials[i]} />
    </div>);
  }

  return <>
    <h1>Testimonials</h1>
    <div className="row justify-content-around">
      {testimonial_components}
    </div>
  </>;
}
