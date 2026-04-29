import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative mx-auto w-full max-w-6xl px-6 py-32 md:px-10 md:py-40"
    >
      <SectionHeading
        eyebrow="Projects"
        title="A few things I've built."
        description="Side projects and explorations. The kind of small, finished thing that's more useful than a half-finished bigger thing."
      />

      <div className="mt-24 flex flex-col gap-32 md:gap-40">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} reverse={i % 2 === 1} />
        ))}
      </div>

      <h3 id="projects-title" className="sr-only">
        Selected projects
      </h3>
    </section>
  );
}
