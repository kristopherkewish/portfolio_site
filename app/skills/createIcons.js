import GithubIcon from "./_icons/GithubIcon";
import JSIcon from "./_icons/JSIcon";
import NextIcon from "./_icons/NextIcon";
import NodeJSIcon from "./_icons/NodeJSIcon";
import PostgresIcon from "./_icons/PostgresIcon";
import ReactIcon from "./_icons/ReactIcon";
import TailwindIcon from "./_icons/TailwindIcon";

const createIcons = (orbitContainerRadius) => {
  const orbitIcons = [];

  const iconComponents = [
    GithubIcon,
    JSIcon,
    NextIcon,
    NodeJSIcon,
    PostgresIcon,
    ReactIcon,
    TailwindIcon
  ];

  const numIcons = iconComponents.length;

  const orbitContainerCenterX = orbitContainerRadius;
  const orbitContainerCenterY = orbitContainerRadius;
  const angleIncrement = (2 * Math.PI) / numIcons;

  for (let i = 0; i < numIcons; i++) {
    const angle = i * angleIncrement;
    const iconRadius = 40;

    const iconCenterX =
      orbitContainerCenterX + orbitContainerRadius * Math.cos(angle);
    const iconCenterY =
      orbitContainerCenterY + orbitContainerRadius * Math.sin(angle); // x and y are coordinates relative to the top left of the containing div (e.g 0,0 would place the icon at the top left of the orbit container)
    const iconCornerX = iconCenterX - iconRadius;
    const iconCornerY = iconCenterY - iconRadius; // Offsets determine the position of the top left corner of the div, therefore the top-left corner position needs to be used.

    const icon = {
      iconRadius,
      iconCornerY,
      iconCornerX,
      iconComponent: iconComponents[i]
    };

    orbitIcons.push(icon);
  }

  return orbitIcons;
};

export { createIcons }
