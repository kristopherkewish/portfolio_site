"use client";

import { useState } from "react";
import TimelineInfo from "./TimelineInfo.js";
import TimelineHoverButtons from "./TimelineHoverButtons.js";

export default function Timeline() {
    const initialState = {
        title: "Hover over a year for more info",
        company: " ",
        descriptionPoints: [" "],
      }

  const [selectedRole, setSelectedRole] = useState(initialState);

  return (
    <>
      <TimelineInfo role={selectedRole} />
      <TimelineHoverButtons handleHover={setSelectedRole} />
    </>
  );
}
