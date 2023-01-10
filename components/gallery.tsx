import { storage } from "../firebaseConfig";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function Gallery() {
  const galleryImgsRef = ref(storage, "gallery-imgs");
  const [images, setImages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const getImages = async () => {
      let imgs = await listAll(galleryImgsRef);
      let imgs_jsx: JSX.Element[] = [];
      for(const img of imgs.items) {
        const url = await getDownloadURL(img);
        imgs_jsx.push(<Image src={url} width="250px" height="400px"/>);
      }

      setImages(imgs_jsx);
    }

    getImages();
  }, [setImages]);
  
  return <>
    {images}
  </>
}
