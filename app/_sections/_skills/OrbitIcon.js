"use client";

import { useState } from "react";

export default function OrbitIcon({
  iconRadius,
  iconCornerY,
  iconCornerX,
  iconComponent,
  iconColor,
}) {
  const IconGraphic = iconComponent;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute flex aspect-square items-center justify-center rounded-full`}
      style={{
        height: `${iconRadius * 2}px`,
        top: `${iconCornerY}px`,
        left: `${iconCornerX}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconGraphic
        style={{
          animationDirection: "reverse",
        }}
        className="h-full w-full animate-[spin_60s_linear_infinite] object-cover"
        fill={isHovered ? iconColor : "#FFFFFF"}
      />
    </div>
  );
}
