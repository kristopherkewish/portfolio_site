import Landing from "./Landing.js";
import Skills from "./skills/page.js";
import Projects from "./projects/page.js";
import Experience from "./experience/page.js";
import Contact from "./contact/page.js";

export default function Home() {
  return (
    <>
      <Landing />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
    
  );
}
