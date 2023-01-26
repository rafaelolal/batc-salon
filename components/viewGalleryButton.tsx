import { useCallback, useEffect, useState } from "react";

const highPadding = "240px";
const lowPadding = "25px";
const yesBoxShadow = "inset 0 40px 50px -30px  rgba(0,0,0,1), inset 0 -40px 50px -30px rgba(0,0,0,1) ";
const noBoxShadow = "none";

export default function ViewGalleryButton() {
  const [ currentlyViewing, setCurrentlyViewing ] = useState(false);
  const [ readyToShowButton, setReadyToShowButton ] = useState(true);
  const [ padding, setPadding ] = useState(highPadding);
  const [ boxShadow, setBoxShadow ] = useState(yesBoxShadow);

  const toggle = useCallback(() => {
    let new_class: string;
    let old_class: string;
    let new_z: number;
    let new_position: string;
    let animation_time: number;

    if(currentlyViewing) {
      new_class = "-animated-shown";
      old_class = "-animated-hidden";
      new_z = -1;
      new_position = "fixed";
      animation_time = 0;
      setCurrentlyViewing(false);
    } else {
      old_class = "-animated-shown";
      new_class = "-animated-hidden";
      new_z = 0;
      new_position = "static";
      animation_time = 1000;
      setCurrentlyViewing(true);
    }

    const index_top = document.getElementById("index-top");
    const index_bottom = document.getElementById("index-bottom");
    if(index_top != null && index_bottom != null) { // Should always be true, but needed to satisfy TS
      setReadyToShowButton(false);

      if(currentlyViewing) {
        index_top.hidden = false;
        index_bottom.hidden = false;
      }
      else {
        setBoxShadow(noBoxShadow);
      }

      setTimeout(() => {
        index_top.classList.replace(`top${old_class}`, `top${new_class}`);
        index_bottom.classList.replace(`bottom${old_class}`, `bottom${new_class}`);
      }, 1); // Short delay needed so that the animation runs after setting hidden to false above

      const gallery = document.getElementById("index-background");
      if(gallery != null && gallery.style != null) { // Should always be true, but needed to satisfy TS
        setTimeout(() => {
          gallery.style.zIndex = new_z.toString();
          gallery.style.position = new_position;

          if(!currentlyViewing) {
            index_top.hidden = true;
            index_bottom.hidden = true;
            setPadding(lowPadding);
          }
          else {
            setPadding(highPadding);
            setBoxShadow(yesBoxShadow);
          }

          // @ts-ignore (instant is a valid value for behavior but TS doesn't see it that way for some reason)
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          setReadyToShowButton(true);
        }, animation_time);
      }
    }
  }, [currentlyViewing, setCurrentlyViewing, setReadyToShowButton, setPadding]);

  const escPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && currentlyViewing) {
        toggle();
      }
    },
    [toggle, currentlyViewing]
  );

  useEffect(() => {
    document.addEventListener("keydown", escPress);
  }, [escPress]);

  return <>
    <div
      style={{
        boxShadow,
        padding
      }}
    >
      {readyToShowButton && (
        <button
          className="mx-auto bg-light px-4 py-3 text-center border-0 shadow-lg"
          style={{ display: "block" }}
          onClick={toggle}
        >
          {!currentlyViewing && <h4 className="text-primary">View Gallery</h4>}
          {currentlyViewing && <h4 className="text-primary">Return</h4>}
        </button>
      )}
    </div>
  </>;
}
