import astroWeather from "../../public/Astro_Weather.png";
import postIt from "../../public/Post_It.png";
import portfolioSite from "../../public/Portfolio_Site.png";

const projects = [
  {
    title: "Astro Weather",
    description:
      "A simple weather app, built with Vite and React, that displays the weather in the Australian capital cities.",
    image: astroWeather,
    link: "https://kind-forest-05e0f2b10.5.azurestaticapps.net/#"
  },
  {
    title: "Post-It",
    description:
      "A simple full stack PERN app that allows you to create sticky notes in the browser.",
    image: postIt,
    link: "https://post-it-zhld.onrender.com/"
  },
  {
    title: "Portfolio Site",
    description:
      "A static site built with NextJS, utilising Tailwind CSS for styling.",
    image: portfolioSite,
    link: "#"
  },
];

export { projects };
