"use client";

import { useEffect, useState } from "react";
import _ from "lodash";
import Landing from "./_sections/_landing/Landing.js";

export default function ScrollContainer() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const sections = ["landing", "skills", "projects", "experience", "contact"];
  let currentSectionIndex = 0;

  useEffect(() => {
    const handleWheel = _.debounce((event) => {
      // Use of Lodash's debounce ensures only one wheel event is triggered per scroll
      if (true) {
        console.log("The current section is: ", sections[currentSectionIndex]);

        if (event.deltaY > 0) {
          console.log("scrolled down!");
          if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
          }
        } else {
          console.log("scrolled up!");
          if (currentSectionIndex > 0) {
            currentSectionIndex--;
          }
        }

        console.log("The next section is: ", sections[currentSectionIndex]);
      }
    }, 200);

    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Landing />
    </>
  );
}
