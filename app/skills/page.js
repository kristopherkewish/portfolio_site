"use client";

import { useEffect } from "react";
import styles from './styles.module.css';

const OrbitContainer = ({ numIcons }) => {
  useEffect(() => {
    // Function to create and position icons around the circumference of the circular div
    const createIcons = () => {
      const orbitContainer = document.getElementById("orbit-container");
      const radius = orbitContainer.offsetWidth / 2; // Radius of the circular div
      const centerX = radius;
      const centerY = radius;
      const angleIncrement = (2 * Math.PI) / numIcons;

      for (let i = 0; i < numIcons; i++) {
        const angle = i * angleIncrement;
        const icon = document.createElement("div");
        const iconRadius = 40;
        icon.className = styles.orbitIcon;
        icon.style.top = (centerY - iconRadius) + radius * Math.sin(angle) + "px";
        icon.style.left = (centerX - iconRadius) + radius * Math.cos(angle) + "px";
        orbitContainer.appendChild(icon);
      }
    };

    // Create icons when component mounts
    createIcons();

    

    // Clean up function to remove icons when component unmounts
    return () => {
      const orbitContainer = document.getElementById("orbit-container");
      orbitContainer.innerHTML = ""; // Remove all child elements
    };
  }, [numIcons]);

  return (
    <div
      className={`${styles.orbitContainer} relative aspect-square h-4/6 rounded-full bg-gray-200 border-solid border-2 border-indigo-600`}
      id="orbit-container"
    ></div>
  );
};

export default function Skills() {
  return (
    <div className="flex h-screen items-center justify-center">
      <OrbitContainer numIcons={6} />
    </div>
  );
}
