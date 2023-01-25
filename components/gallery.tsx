import Image from "next/image";

const NUM_IMGS = 54;

export default function Gallery() {
  const images: JSX.Element[] = [];
  for(let i = 0; i < NUM_IMGS; i++) {
    images.push(<Image className="m-1" key={i} src={`/images/gallery/${i}.jpg`} alt="A previous customer with an amazing haircut" width="250px" height="400px"/>);
  }

  return <div className="d-flex justify-content-center flex-wrap">
    {images}
  </div>;
}
