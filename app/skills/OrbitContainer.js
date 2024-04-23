"use client";

import { createIcons } from "./createIcons.js";
import { useEffect, useRef, useState } from "react";
import OrbitIcon from "./OrbitIcon.js";

export default function OrbitContainer() {
  const orbitContainer = useRef(0);
  const [orbitContainerRadius, setOrbitContainerRadius] = useState(0);

  const calculateOrbitContainerRadius = () => {
    const orbitContainerRef = orbitContainer.current;
    if (orbitContainerRef) {
      const orbitContainerDiameter = orbitContainerRef.offsetWidth;
      setOrbitContainerRadius(orbitContainerDiameter / 2);
    }
  };

  // Grabs the radius of the orbit container once it is rendered on the screen, so that icon position can be calculated
  useEffect(() => {
    calculateOrbitContainerRadius();

    // Add event listener for window resize
    window.addEventListener("resize", calculateOrbitContainerRadius);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", calculateOrbitContainerRadius);
    };
  }, []);

  return (
    <div
      className={`relative  aspect-square h-5/6 animate-[spin_60s_linear_infinite] rounded-full`}
      ref={orbitContainer}
    >
      {/* Condition ensures icons are only rendered after the container has been rendered and width calculated */}
      {orbitContainerRadius !== 0 &&
        createIcons(orbitContainerRadius).map((icon, index) => {
          return (
            <OrbitIcon
              key={index}
              iconRadius={icon.iconRadius}
              iconCornerY={icon.iconCornerY}
              iconCornerX={icon.iconCornerX}
              iconComponent={icon.iconComponent}
            />
          );
        })}
    </div>
  );
}
