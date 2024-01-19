import Image from "next/image";
import { TestimonialType } from "../types/testimonial";

export default function Testimonial(props: { testimonial: TestimonialType }) {
  const stars = [];
  for (let i = 0; i < props.testimonial.rating; i++) {
    stars.push(
      <Image src="/batc/icons/star.png" width="25px" height="25px" alt="Star" />
    );
  }

  return (
    <div
      className="rounded p-4 position-relative d-flex flex-column"
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        height: "100%",
      }}
    >
      <h5 className="text-center">
        {props.testimonial.customer}
        <hr
          className="mx-auto my-1"
          style={{
            width: "50px",
            height: "2px",
            borderTop: "3px solid black",
            opacity: "100%",
          }}
        />
      </h5>
      <h6 className="text-center">{props.testimonial.subtitle}</h6>
      <div className="mx-auto my-3" style={{ width: "fit-content" }}>
        {stars}
      </div>
      <p className="text-center text-break mb-5">
        {"\""}
        {props.testimonial.desc}
        {"\""}
      </p>

      <h6 className="text-center mt-auto">
        {props.testimonial.date.toDate().toLocaleString()}
      </h6>
    </div>
  );
}
