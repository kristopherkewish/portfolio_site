import { EmblaCarousel } from "./EmblaCarousel.js";

export default function Projects() {
  return (
    <div
      id="projects"
      className="absolute flex h-dvh w-screen flex-col items-center justify-center overflow-scroll bg-orange-900 text-white"
    >
      <div className="mb-10 text-5xl lg:text-8xl font-extrabold">PROJECTS</div>
      <EmblaCarousel />
    </div>
  );
}
