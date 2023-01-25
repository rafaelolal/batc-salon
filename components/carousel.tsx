import Image from "next/future/image";
import { CarouselPropsType } from "../types/indexPropsTypes";

export default function Carousel(props: { data: CarouselPropsType }) {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {props.data.items.map((carousel, i) => (
          <div key={i} className={`carousel-item ${i == 1 ? "active" : ""}`}>
            <div
              className="card text-bg-dark rounded-0"
              style={{ height: "60vh" }}
            >
              <Image
                className="card-img"
                src={carousel.image}
                alt="alt 1"
                style={{ objectFit: "cover", opacity: 0.5 }}
                fill
                placeholder="blur"
                blurDataURL="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              />
              <div className="card-img-overlay d-flex">
                <h1 className="card-title mx-auto my-auto">{carousel.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
