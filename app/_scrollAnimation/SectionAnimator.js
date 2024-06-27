"use client";

import { useEffect, useState } from "react";
import Landing from "../_sections/_landing/Landing.js";
import Skills from "../_sections/_skills/page.js";
import Projects from "../_sections/_projects/page.js";
import Experience from "../_sections/_experience/page.js";
import Contact from "../_sections/_contact/page.js";
import { showCurrentSection } from "./showCurrentSection.js";

export default function SectionAnimator({ currentSection, setSection }) {
  const [windowHeight, setWindowHeight] = useState(0);
  const [divVerticalTranslates, setDivVerticalTranslates] = useState([
    0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    showCurrentSection(currentSection, windowHeight, setDivVerticalTranslates);
  }, [currentSection]);

  return (
    <>
      <div
        className="absolute z-50"
        style={{
          transition: "transform 1s",
          transform: `translateY(${-1 * divVerticalTranslates[0]}px)`,
        }}
      >
        <Landing setSection={setSection} />
      </div>
      <div
        className="absolute z-40 transition"
        style={{
          transition: "transform 1s",
          transform: `translateY(${-1 * divVerticalTranslates[1]}px)`,
        }}
      >
        <Skills />
      </div>
      <div
        className="absolute z-30 transition"
        style={{
          transition: "transform 1s",
          transform: `translateY(${-1 * divVerticalTranslates[2]}px)`,
        }}
      >
        <Projects />
      </div>
      <div
        className="absolute z-20 transition"
        style={{
          transition: "transform 1s",
          transform: `translateY(${-1 * divVerticalTranslates[3]}px)`,
        }}
      >
        <Experience />
      </div>
      <div
        className="absolute z-10 transition"
        style={{
          transition: "transform 1s",
          transform: `translateY(${-1 * divVerticalTranslates[4]}px)`,
        }}
      >
        <Contact />
      </div>
    </>
  );
}
