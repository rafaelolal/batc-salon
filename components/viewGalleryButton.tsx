import { useCallback, useEffect, useState } from "react";

export default function ViewGalleryButton() {
  const [currentlyViewing, setCurrentlyViewing] = useState(false);

  const toggle = useCallback(() => {
    let new_class;
    let old_class;
    if (currentlyViewing) {
      new_class = "-animated-shown";
      old_class = "-animated-hidden";
      setCurrentlyViewing(false);
    } else {
      old_class = "-animated-shown";
      new_class = "-animated-hidden";
      setCurrentlyViewing(true);
    }

    const index_top = document.getElementById("index-top");
    const index_bottom = document.getElementById("index-bottom");
    if (index_top != null && index_bottom != null) {
      // Should always be true
      index_top.classList.replace(`top${old_class}`, `top${new_class}`);
      index_bottom.classList.replace(
        `bottom${old_class}`,
        `bottom${new_class}`
      );
    }
  }, [currentlyViewing, setCurrentlyViewing]);

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

  return (
    <div style={{ padding: "200px" }}>
      {!currentlyViewing && (
        <button
          className="mx-auto bg-light p-4 text-center"
          style={{ display: "block" }}
          onClick={toggle}
        >
          <h2>View Gallery</h2>
        </button>
      )}
    </div>
  );
}
