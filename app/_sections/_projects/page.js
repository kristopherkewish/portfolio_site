import Card from "./Card.js";
import { EmblaCarousel } from "./EmblaCarousel.js";
import { projects } from "./projects.js";

export default function Projects() {
  return (
    <div
      id="projects"
      className="absolute flex h-screen w-screen flex-col items-center justify-center overflow-scroll bg-orange-900 text-white"
    >
      <div className="mb-10 text-8xl font-extrabold">PROJECTS</div>
        {
        /*projects.map((project, index) => (
          <Card
            key={index}
            order={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))
      */
      }
      <EmblaCarousel />
    </div>
  );
}
