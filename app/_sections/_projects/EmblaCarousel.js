import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image'
import astroWeather from "../../../public/Astro_Weather.png";
import postIt from "../../../public/Post_It.png";
import portfolioSite from "../../../public/Portfolio_Site.png";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla relative overflow-hidden w-3/4 rounded-xl bg-white text-black text-center" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-none w-full min-w-0">
            <Image
            className="h-full w-full object-cover"
            src={astroWeather}
            alt={`screenshot`}
          />
        </div>
        <div className="embla__slide flex-none w-full min-w-0">
        <Image
            className="h-full w-full object-cover"
            src={postIt}
            alt={`screenshot`}
          />
        </div>
        <div className="embla__slide flex-none w-full min-w-0">
        <Image
            className="h-full w-full object-cover"
            src={portfolioSite}
            alt={`screenshot`}
          />
        </div>
      </div>
      <button className="embla__prev absolute top-1/2 left-3 rounded-full bg-gray-300 drop-shadow-md w-5 h-5 hover:bg-black" onClick={scrollPrev}>
        
      </button>
      <button className="embla__next absolute top-1/2 right-3 rounded-full bg-gray-300 drop-shadow-md w-5 h-5 hover:bg-black" onClick={scrollNext}>
        
      </button>
    </div>
  )
}
