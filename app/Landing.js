import TypedText from "./TypedText.js";
import Link from "next/link";

export default function Landing() {
  return (
    <div class="relative flex h-screen	w-screen flex-col items-center justify-center bg-green-600 text-white">
      <div class="text-6xl">Full Stack Developer</div>
      <div class="text-[10rem] font-extrabold">KRIS KEWISH</div>
      <TypedText />
      <Link href="#skills">
        <div class="absolute left-8 top-8 text-xl">Skills</div>
      </Link>
      <Link href="#experience">
        <div class="absolute right-8 top-8 text-xl">Experience</div>
      </Link>
      <Link href="#projects">
        <div class="absolute bottom-8  left-8 text-xl">Projects</div>
      </Link>
      <Link href="#contact">
        <div class="absolute bottom-8 right-8 text-xl">Contact</div>
      </Link>
    </div>
  );
}
