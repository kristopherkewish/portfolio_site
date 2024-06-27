import Timeline from "./Timeline.js";

export default function Experience() {
  return (
    <div
      id="experience"
      className="absolute flex h-dvh w-screen flex-col items-center justify-center overflow-hidden bg-emerald-900 text-white"
    >
      <div className="mb-10 text-5xl font-extrabold lg:text-8xl">
        EXPERIENCE
      </div>
      <Timeline />
    </div>
  );
}
