"use client";

import { useEffect, useState } from "react";
import { handleScroll } from "./handleScroll.js";
import SectionAnimator from "./SectionAnimator.js";

export default function ScrollTracker() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ["landing", "skills", "projects", "experience", "contact"];

  useEffect(() => {
    const handleWheel = handleScroll(setCurrentSection, sections.length);

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return <SectionAnimator currentSection={sections[currentSection]} />
}
