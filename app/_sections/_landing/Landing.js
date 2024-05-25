import TypedText from "./TypedText.js";

export default function Landing({ setSection }) {
  return (
    <div class="absolute flex w-screen h-screen flex-col items-center justify-center overflow-hidden bg-green-600 text-white">
      <div class="text-6xl">Full Stack Developer</div>
      <div class="text-[10rem] font-extrabold">KRIS KEWISH</div>
      <TypedText />      
        <div class="absolute left-8 top-8 text-xl hover:cursor-pointer" onClick={() => setSection(1)}>Skills</div>
        <div class="absolute right-8 top-8 text-xl hover:cursor-pointer" onClick={() => setSection(3)}>Experience</div>
        <div class="absolute bottom-8  left-8 text-xl hover:cursor-pointer" onClick={() => setSection(2  )}>Projects</div>
        <div class="absolute bottom-8 right-8 text-xl hover:cursor-pointer" onClick={() => setSection(4)}>Contact</div>
    </div>
  );
}
