"use client";

import { useEffect, useState } from "react";
import _ from "lodash";
import Landing from "../_sections/_landing/Landing.js";
import { handleScroll } from "./handleScroll.js";

export default function ScrollContainer() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ["landing", "skills", "projects", "experience", "contact"];
  
  useEffect(() => {
    const handleWheel = handleScroll(setCurrentSection, sections.length);
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
