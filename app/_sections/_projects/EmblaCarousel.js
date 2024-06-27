import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import EmblaSlide from "./EmblaSlide";
import { projects } from "./projects";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className="embla relative w-full overflow-hidden rounded-xl bg-white text-center text-black lg:w-3/4"
      ref={emblaRef}
    >
      <div className="embla__container flex">
        {projects.map((project) => {
          return (
            <EmblaSlide
              link={project.link}
              imgSrc={project.image}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>
      <button
        className="embla__prev absolute left-3 top-1/2 hidden h-5 w-5 rounded-full bg-gray-300 drop-shadow-md hover:bg-black lg:block"
        onClick={scrollPrev}
      ></button>
      <button
        className="embla__next absolute right-3 top-1/2 hidden h-5 w-5 rounded-full bg-gray-300 drop-shadow-md hover:bg-black lg:block"
        onClick={scrollNext}
      ></button>
    </div>
  );
}
