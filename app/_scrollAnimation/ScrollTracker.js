"use client";

import { useEffect, useState } from "react";
import { handleScroll, nextSection, previousSection } from "./handleScroll.js";
import SectionAnimator from "./SectionAnimator.js";
import _ from "lodash";

export default function ScrollTracker() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ["landing", "skills", "projects", "experience", "contact"];

  useEffect(() => {
    const handleWheel = handleScroll(setCurrentSection, sections.length);

    window.addEventListener("wheel", handleWheel);

    // --- MOBILE SWIPE HANDLING START ---

    /*
      NEXT STEPS:
        - Fix horizontal swipe (e.g on projects carousel) causing scroll animation
        - Refactor (put swipe handlers into scroll handler file)
    */

    let touchStartY = 0;

    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = _.debounce(
      (event) => {
        const touchEndY = event.changedTouches[0].clientY;
        const deltaY = touchStartY - touchEndY;
        const threshold = 50;

        if(Math.abs(deltaY) < threshold) {
          return;
        }

        if (deltaY > 0) {
          console.log("Scrolled to next section");
          nextSection(setCurrentSection, sections.length);
        } else if (deltaY < 0) {
          console.log("Scrolled to previous section");
          previousSection(setCurrentSection);
        }
      },
      200,
      { leading: true, trailing: false },
    );

    window.addEventListener("touchstart", handleTouchStart);

    window.addEventListener("touchend", handleTouchEnd);

    // --- MOBILE SWIPE HANDLING END ---

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <SectionAnimator
      currentSection={sections[currentSection]}
      setSection={setCurrentSection}
    />
  );
}
