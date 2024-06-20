import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Writings from "../sections/Writings";

export default function IndexPage() {
  return (
    <>
      <div className="px-1 flex flex-col justify-center mt-4">
        {/* <img className=" xl:hidden w-[400px] rounded-full object-cover justify-center flex items-center" src="https://lesedipitsi.com/assets/avatar-e2fb5a03.webp" alt="Portfolio Picture" /> */}

        <About />
        <Projects />
        <Skills />
        <Education />
        <Writings />
      </div>
    </>
  );
}
