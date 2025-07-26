import Image from "next/future/image";

const NUM_IMGS = 54;

export default function Gallery() {
  const images: JSX.Element[] = [];
  for (let i = 0; i < NUM_IMGS; i++) {
    images.push(
      <div className="col-6 col-sm-4 col-md-3 col-xxl-2 p-1">
        <Image
          className="expand"
          key={i}
          src={`/batc/images/gallery/${i}.jpg`}
          alt="A previous customer with an amazing haircut"
          width="100"
          height="400"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    );
  }

  return <div className="row justify-content-center p-0">{images}</div>;
}
