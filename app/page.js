import TypedText from './TypedText.js';

export default function Home() {
  return (
    <div class="relative flex bg-green-600	text-white h-screen w-screen flex-col items-center justify-center">
      <div class="text-6xl">Full Stack Developer</div>
      <div class="text-[10rem] font-extrabold">KRIS KEWISH</div>
      <TypedText />
      <div class="absolute left-8 top-8 text-xl">Skills</div>
      <div class="absolute right-8 top-8 text-xl">Experience</div>
      <div class="absolute bottom-8  left-8 text-xl">Projects</div>
      <div class="absolute bottom-8 right-8 text-xl">Contact</div>
    </div>
  );
}
