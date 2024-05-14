import ScrollContainer from "./ScrollContainer.js";
import Landing from "./_sections/_landing/Landing.js";
import Skills from "./_sections/_skills/page.js";
import Projects from "./_sections/_projects/page.js";
import Experience from "./_sections/_experience/page.js";
import Contact from "./_sections/_contact/page.js";

export default function Home() {
  return (
    <ScrollContainer>
      <Landing />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </ScrollContainer>
  );
}
