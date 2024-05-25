import Timeline from "./Timeline.js";

export default function Experience() {
  return (
    <div
      id="experience"
      class="absolute flex w-screen h-screen flex-col items-center justify-center overflow-hidden bg-emerald-900 text-white"
    >
      <div className="mb-10 text-8xl font-extrabold">EXPERIENCE</div>
      <Timeline />
    </div>
  );
}
