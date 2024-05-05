import Card from "./Card.js";
import { projects } from "./projects.js";

export default function Projects() {
  return (
    <div className="relative flex min-h-screen	w-screen flex-col items-center justify-center bg-slate-200 text-black">
      <div className="mb-10 text-8xl font-extrabold text-black">PROJECTS</div>
      <div className="flex w-screen flex-row flex-wrap justify-evenly">
        {projects.map((project, index) => (
          <Card
            key={index}
            order={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
