import { FaGithub, FaLinkedin } from "react-icons/fa";
import PointingEmoji from "../components/PointingEmoji";
import WavingEmoji from "../components/WavingEmoji";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import DarkModeToggle from "../components/DarkModeToggle";

export default function About() {
  return (
    <>
      <section id="about" className="scroll-smooth  mt-20">
        {/* <DarkModeToggle className=" fixed right-2" /> */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <img
            className=" w-[300px] rounded-full xl:flex items-center justify-center object-cover "
            src="/images/lesegoProfile.jpg"
            alt="Portfolio Picture"
          />
          <div className="text-center  md:ml-6 mt-4 md:mt-0 flex flex-col justify-center items-center ">
            <WavingEmoji />
            <h3 className=" text-md lg:text-2xl font-semibold mb-4 text-center ">
              I am Lesego Quincy Pitsi
            </h3>
            <span className=" text-sm  xl:text-lg text-center ">
              I am a goal-oriented individual passionate about impactful
              software solutions. My curiosity, work ethic, and problem-solving
              skills help me excel in tech.
            </span>
            <div className=" text-center mt-6 flex flex-row gap-x-4 justify-center md:justify-start items-center">
              <PointingEmoji />
              <a
                href="https://www.linkedin.com/in/lquincy01/"
                className=" text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/l-quincy01"
                className="text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/lquincy01/"
                className="text-sm md:text-lg lg:text-xl xl:text-3xl cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
              <a
                href="mailto:lqplsg@gmail.com"
                className="text-sm md:text-md lg:text-lg xl:text-2xl cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
