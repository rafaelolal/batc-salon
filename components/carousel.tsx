import Image from "next/future/image";

export default function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card text-bg-dark rounded-0" style={{ height: "50vh" }}>
            <Image
              className="card-img"
              src="/images/carousel/carousel1.jpg"
              alt="alt 1"
              style={{ objectFit: "cover", opacity: 0.5 }}
              fill
              placeholder="blur"
              blurDataURL="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
            />
            <div className="card-img-overlay d-flex">
              <h1 className="card-title mx-auto my-auto">CARD TITLE</h1>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card text-bg-dark rounded-0" style={{ height: "50vh" }}>
            <Image
              className="card-img"
              src="/images/carousel/carousel2.jpg"
              alt="alt 1"
              style={{ objectFit: "cover", opacity: 0.5 }}
              fill
              placeholder="blur"
              blurDataURL="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
            />
            <div className="card-img-overlay d-flex">
              <h1 className="card-title mx-auto my-auto">CARD TITLE</h1>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card text-bg-dark rounded-0" style={{ height: "50vh" }}>
            <Image
              className="card-img"
              src="/images/carousel/carousel3.jpg"
              alt="alt 1"
              style={{ objectFit: "cover", opacity: 0.5 }}
              fill
              placeholder="blur"
              blurDataURL="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
            />
            <div className="card-img-overlay d-flex">
              <h1 className="card-title mx-auto my-auto">CARD TITLE</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
