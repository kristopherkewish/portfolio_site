"use client";

import { useEffect, useState } from "react";
import {
  handleScroll,
  handleTouchEnd,
  handleTouchStart,
} from "./handleScroll.js";
import SectionAnimator from "./SectionAnimator.js";
import _ from "lodash";

export default function ScrollTracker() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ["landing", "skills", "projects", "experience", "contact"];

  useEffect(() => {
    const handleWheel = handleScroll(setCurrentSection, sections.length);
    const handleSwipe = handleTouchEnd(setCurrentSection, sections.length);

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleSwipe);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleSwipe);
    };
  }, []);

  return (
    <SectionAnimator
      currentSection={sections[currentSection]}
      setSection={setCurrentSection}
    />
  );
}
