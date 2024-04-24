import Card from "./Card.js";

export default function Projects() {
  const projects = [
    {
      title: "Astro Weather",
      description:
        "A simple weather app, built with Vite and React, that displays the weather in the Australian capital cities.",
    },
    {
      title: "Post-It",
      description:
        "A simple full stack PERN app that allows you to create sticky notes in the browser.",
    },
    {
      title: "Portfolio Site",
      description:
        "A static site built with NextJS, utilising Tailwind CSS for styling.",
    },
  ];

  return (
    <div className="relative flex min-h-screen	w-screen flex-col items-center justify-center bg-slate-600 text-white">
      <div className="mb-10 text-6xl font-extrabold">PROJECTS</div>
      <div className="flex w-screen flex-row flex-wrap justify-evenly">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
