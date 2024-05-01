"use client";

import { useEffect, useRef, useState } from "react";

export default function MovingDot({ numDots }) {
  const screenBoundary = useRef(0);
  const [dotCoordinates, setDotCoordinates] = useState([0, 0]);

  const X = 0;
  const Y = 1;

  const delays = [];

  for (let i = 0; i <= numDots; i++) {
    delays.push(50 * i);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const screenHeight = screenBoundary.current.offsetHeight;
      const screenWidth = screenBoundary.current.offsetWidth;

      const getRandomPosition = () => {
        const randX = Math.random() * Number(screenWidth);
        const randY = Math.random() * Number(screenHeight);

        return [randX, randY];
      };

      const newPosition = getRandomPosition();

      setDotCoordinates(newPosition);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute h-full w-full" ref={screenBoundary}>
      {delays.map((delay, index) => (
        <div
          key={delay} // Make sure to provide a unique key for each element
          className="absolute h-[10px] w-[10px] rounded-full bg-black"
          style={{
            top: `calc(${dotCoordinates[Y]}px - 10px)`,
            left: `calc(${dotCoordinates[X]}px - 10px)`,
            transition: "all 3s",
            transitionDelay: `${delay}ms`,
            backgroundColor: `rgb(0,0,0,${1 - 0.15 * index})`
          }}
        ></div>
      ))}
    </div>
  );
}
