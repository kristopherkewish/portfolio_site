import TypedText from "./TypedText.js";

export default function Landing({ setSection }) {
  return (
    <div className="absolute flex h-dvh w-screen flex-col items-start justify-center overflow-hidden bg-green-600 px-1 text-white lg:items-center lg:px-0">
      <div className="text-3xl lg:text-6xl">Full Stack Developer</div>
      <div className="text-[5rem] font-extrabold lg:text-[10rem]">KRIS KEWISH</div>
      <TypedText />
      <div
        className="absolute left-8 top-8 hidden text-xl hover:cursor-pointer lg:block"
        onClick={() => setSection(1)}
      >
        Skills
      </div>
      <div
        className="absolute right-8 top-8 hidden text-xl hover:cursor-pointer lg:block"
        onClick={() => setSection(3)}
      >
        Experience
      </div>
      <div
        className="absolute bottom-8 left-8 hidden  text-xl hover:cursor-pointer lg:block"
        onClick={() => setSection(2)}
      >
        Projects
      </div>
      <div
        className="absolute bottom-8 right-8 text-xl hover:cursor-pointer lg:block"
        onClick={() => setSection(4)}
      >
        Contact
      </div>
    </div>
  );
}
