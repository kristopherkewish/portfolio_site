import TypedText from "./TypedText.js";

export default function Landing({ setSection }) {
  return (
    <div class="absolute flex h-dvh w-screen px-1 lg:px-0 flex-col items-start lg:items-center justify-center overflow-hidden bg-green-600 text-white">
      <div class="text-3xl lg:text-6xl">Full Stack Developer</div>
      <div class="text-[5rem] lg:text-[10rem] font-extrabold">KRIS KEWISH</div>
      <TypedText />
      <div
        class="hidden lg:block absolute left-8 top-8 text-xl hover:cursor-pointer"
        onClick={() => setSection(1)}
      >
        Skills
      </div>
      <div
        class="lg:block absolute right-8 top-8 text-xl hover:cursor-pointer"
        onClick={() => setSection(3)}
      >
        Experience
      </div>
      <div
        class="hidden lg:block absolute bottom-8  left-8 text-xl hover:cursor-pointer"
        onClick={() => setSection(2)}
      >
        Projects
      </div>
      <div
        class="hidden lg:block absolute bottom-8 right-8 text-xl hover:cursor-pointer"
        onClick={() => setSection(4)}
      >
        Contact
      </div>
    </div>
  );
}
