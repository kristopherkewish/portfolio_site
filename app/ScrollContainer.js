"use client";

import { useEffect, useState } from "react";

export default function ScrollContainer({ children }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const sections = ["landing", "skills", "projects", "experience", "contact"];
  let currentSectionIndex = 0;

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY >= 100) {
        console.log("The current section is: ", sections[currentSectionIndex]);

        if (event.deltaY > 0) {
          console.log('scrolled down!');
          if(currentSectionIndex < sections.length-1) {
            currentSectionIndex++;
          }
        } else {
          console.log('scrolled up!');
          if(currentSectionIndex > 0) {
            currentSectionIndex--;
          }
        }

        console.log("The next section is: ", sections[currentSectionIndex]);
      }
    };

    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{children}</div>;
}
