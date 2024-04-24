import OrbitContainer from "./OrbitContainer.js";

export default function Skills() {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-gray-200">
      <div className="absolute left-16 top-20 font-bold text-2xl">
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
