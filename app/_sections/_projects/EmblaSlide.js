import Image from "next/image";

export default function EmblaSlide({ link, imgSrc, title, description }) {
  return (
    <div className="embla__slide relative w-full min-w-0 flex-none">
      <a href={link} target="_blank">
        <Image
          className="h-full w-full object-cover"
          src={imgSrc}
          alt={title}
        />
      </a>
      <div className="absolute bottom-0 hidden w-full bg-white/90 p-5 lg:block">
        <div className="font-bold">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
