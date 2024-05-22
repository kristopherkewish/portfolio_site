"use client";

import { useEffect, useState } from "react";
import Landing from "../_sections/_landing/Landing.js";
import Skills from "../_sections/_skills/page.js";
import Projects from "../_sections/_projects/page.js";
import Experience from "../_sections/_experience/page.js";
import Contact from "../_sections/_contact/page.js";

export default function SectionAnimator({ currentSection }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [divVerticalTranslates, setDivVerticalTranslates] = useState([
    0, 0, 0, 0, 0,
  ]);

  const showCurrentSection = () => {
    const x = windowHeight;

    if (currentSection === "landing") {
      setDivVerticalTranslates([0, 0, 0, 0, 0]);
      return;
    }

    if (currentSection === "skills") {
      setDivVerticalTranslates([x, 0, 0, 0, 0]);
      return;
    }

    if (currentSection === "projects") {
      setDivVerticalTranslates([x, x, 0, 0, 0]);
      return;
    }

    if (currentSection === "experience") {
      setDivVerticalTranslates([x, x, x, 0, 0]);
      return;
    }

    if (currentSection === "contact") {
      setDivVerticalTranslates([x, x, x, x, 0]);
      return;
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    showCurrentSection();
  }, [currentSection])

  return (
    <>
      <div>
        <Landing />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}
