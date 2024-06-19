import OrbitContainer from "./OrbitContainer.js";

export default function Skills() {
  return (
    <div
      id="skills"
      className="absolute flex h-dvh w-screen items-center justify-center overflow-hidden bg-blue-900 text-white"
    >
      <div className="absolute left-16 top-20 text-2xl font-bold">
        LANGUAGES:
        <ul className="text-l font-mono font-normal">
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
        </ul>
        <br />
        FRAMEWORKS:
        <ul className="text-l font-mono font-normal">
          <li>React</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>Express</li>
          <li>NodeJS</li>
          <li>NextJS</li>
        </ul>
        <br />
        TOOLS:
        <ul className="text-l font-mono font-normal">
          <li>Postgres</li>
          <li>Postman</li>
          <li>Github</li>
        </ul>
      </div>
      <OrbitContainer />
      <div className="absolute text-6xl font-extrabold">SKILLS</div>
    </div>
  );
}
