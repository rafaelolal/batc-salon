import Image from "next/image";

type GalleryProps = {
  imgUrls: string[];
}

export default function Gallery(props: GalleryProps) {
  const images: JSX.Element[] = [];
  props.imgUrls.forEach((url) => {
    images.push(<Image src={url} alt="A previous customer with an amazing haircut" width="250px" height="400px"/>);
  });

  return <>
    {images}
  </>;
}
