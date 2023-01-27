import Image from "next/future/image";
import { CarouselPropsType } from "../types/indexPropsTypes";

export default function Carousel(props: { data: CarouselPropsType }) {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide mt-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {props.data.items.map((carousel, i) => (
          <div key={i} className={`carousel-item ${i == 1 ? "active" : ""}`}>
            <div className="card rounded-0 mx-auto" style={{ height: "50vh" }}>
              <Image
                className="card-img mx-auto"
                src={carousel.image}
                alt="alt 1"
                style={{ objectFit: "cover", opacity: 1 }}
                fill
                placeholder="blur"
                blurDataURL="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
