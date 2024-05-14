"use client";

import { useEffect, useState } from "react";

export default function ScrollContainer({ children }) {
  const [verticalScroll, setVerticalScroll] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => setVerticalScroll(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{children}</div>;
}
