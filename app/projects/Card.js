"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Card({ order, title, description, image, link }) {
  const [animate, setAnimate] = useState(false);
  const pathname = usePathname();

  const transitionDelayFactor = 300;
  const transitionDelay = transitionDelayFactor * order; // Delays animation to make cards zoom in staggered

  useEffect(() => {
    setAnimate(true); // Ensure animation only starts once the user navigates to the page (not on preload)
  }, [pathname]);

  return (
    <div
      className="mb-10 flex h-fit w-96 flex-col rounded-md drop-shadow-2xl"
      style={{
        opacity: animate ? "1" : "0",
        filter: animate ? "blur(0px)" : "blur(5px)",
        transform: animate ? "translateX(0px)" : "translateX(-100%)",
        transition: "all 1.75s",
        transitionDelay: `${transitionDelay}ms`,
      }}
    >
      <div className="mb-3 flex items-center justify-center overflow-hidden rounded-md bg-slate-900 text-white drop-shadow-lg">
        <a href={link} target="_blank">
          <Image
            className="h-full w-full object-cover"
            src={image}
            alt={`${title} screenshot`}
          />
        </a>
      </div>
      <div className="flex h-44 flex-col rounded-md text-black">
        <div className="mb-3 text-xl font-bold">{title}</div>
        <div className="text-base">{description}</div>
      </div>
    </div>
  );
}
