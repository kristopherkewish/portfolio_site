import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import astroWeather from "../../../public/Astro_Weather.png";
import postIt from "../../../public/Post_It.png";
import portfolioSite from "../../../public/Portfolio_Site.png";

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
      className="embla relative w-3/4 overflow-hidden rounded-xl bg-white text-center text-black"
      ref={emblaRef}
    >
      <div className="embla__container flex">
        <div className="embla__slide w-full min-w-0 flex-none">
          <a
            href={"https://kind-forest-05e0f2b10.5.azurestaticapps.net/#"}
            target="_blank"
          >
            <Image
              className="h-full w-full object-cover"
              src={astroWeather}
              alt={`screenshot`}
            />
          </a>
        </div>
        <div className="embla__slide w-full min-w-0 flex-none">
          <a href={"https://post-it-zhld.onrender.com/"} target="_blank">
            <Image
              className="h-full w-full object-cover"
              src={postIt}
              alt={`screenshot`}
            />
          </a>
        </div>
        <div className="embla__slide w-full min-w-0 flex-none">
          <a href={"#"} target="_blank">
            <Image
              className="h-full w-full object-cover"
              src={portfolioSite}
              alt={`screenshot`}
            />
          </a>
        </div>
      </div>
      <button
        className="embla__prev absolute left-3 top-1/2 h-5 w-5 rounded-full bg-gray-300 drop-shadow-md hover:bg-black"
        onClick={scrollPrev}
      ></button>
      <button
        className="embla__next absolute right-3 top-1/2 h-5 w-5 rounded-full bg-gray-300 drop-shadow-md hover:bg-black"
        onClick={scrollNext}
      ></button>
    </div>
  );
}
