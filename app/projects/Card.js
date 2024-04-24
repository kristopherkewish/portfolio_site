"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Card({ order, title, description }) {
  const [animate, setAnimate] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const pathname = usePathname();

  const transitionDelayFactor = 300;
  const transitionDelay = transitionDelayFactor * order;

  useEffect(() => {
    setAnimate(true);
  }, [pathname]);

  return (
    <div
      className="min-h- mb-10 flex h-fit w-72 flex-col rounded-md drop-shadow-2xl"
      style={{
        opacity: animate ? "1" : "0",
        filter: animate ? "blur(0px)" : "blur(5px)",
        transform: animate ? "translateX(0px)" : "translateX(-100%)",
        transition: "all 1.75s",
        transitionDelay: `${transitionDelay}ms`,
      }}
      onMouseEnter={() => setTextVisible(true)}
      onMouseLeave={() => setTextVisible(false)}
    >
      <div
        className="flex h-44 items-center justify-center rounded-md bg-slate-900 text-white border-solid border-8 border-slate-900"
        style={{
          filter: textVisible ? "blur(5px)" : "none",
        }}
      >
      </div>
      <div
        className="absolute opacity-40 flex h-44 flex-col items-center justify-center rounded-md bg-black p-5 text-center text-white"
        style={{
          visibility: textVisible ? "visible" : "hidden",
        }}
      >
        <div className="mb-3 text-xl font-bold opacity-100">{title}</div>
        <div className="text-base opacity-100">{description}</div>
      </div>
    </div>
  );
}
