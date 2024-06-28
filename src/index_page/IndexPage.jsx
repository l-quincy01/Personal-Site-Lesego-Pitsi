import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Writings from "../sections/Writings";
import Resume from "../sections/Resume";

export default function IndexPage() {
  return (
    <>
      <div className="px-1 flex flex-col justify-center mt-5 space-y-35 flex-grow">
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Education />
        <Writings />
      </div>
    </>
  );
}
