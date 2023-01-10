import { storage } from "../firebaseConfig";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
  const galleryImgsRef = ref(storage, "gallery-imgs");
  const [images, setImages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const getImages = async () => {
      const imgs = await listAll(galleryImgsRef);
      const imgs_jsx: JSX.Element[] = [];
      for(const img of imgs.items) {
        const url = await getDownloadURL(img);
        imgs_jsx.push(<Image src={url} alt="A previous customer with an amazing haircut" width="250px" height="400px"/>);
      }

      setImages(imgs_jsx);
    };

    getImages();
  }, [setImages, galleryImgsRef]);
  
  return <>
    {images}
  </>;
}
