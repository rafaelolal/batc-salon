import Image from "next/image";
import { TestimonialType } from "../types/testimonial";

export default function Testimonial(props: { testimonial: TestimonialType }) {
  const stars = []
  for(let i = 0; i < props.testimonial.rating; i++) {
    stars.push(<Image src="/icons/star.png" width="25px" height="25px" />);
  }

  return <div className="m-2 p-2 border border-2 border-dark">
    <h2>{props.testimonial.customer}</h2>
    <i>{props.testimonial.subtitle}</i><br/>
    {stars}
    <p>{props.testimonial.desc}</p>
    <small>{props.testimonial.date.toDate().toLocaleString()}</small>
  </div>
}
