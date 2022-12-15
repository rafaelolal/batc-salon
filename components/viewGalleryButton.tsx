import {useState} from "react";

export default function ViewGalleryButton() {
  const [ currentlyViewing, setCurrentlyViewing ] = useState(false);

  function clickHandler() {
    let index_top = document.getElementById("index-top");
    let index_bottom = document.getElementById("index-bottom");

    let new_height;
    if(currentlyViewing) {
      new_height = "auto";
      setCurrentlyViewing(false);
    }
    else {
      new_height = "0";
      setCurrentlyViewing(true);
    }

    index_top!.style.height = new_height;
    index_bottom!.style.height = new_height;
  }

  return <div style={{padding:"200px"}}>
    <button className="mx-auto bg-light p-4 text-center" style={{display:"block"}} onClick={clickHandler}>
      <h2>View Gallery</h2>
    </button>
  </div>;
}
