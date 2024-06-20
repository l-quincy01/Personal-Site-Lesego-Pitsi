import { FaGithub, FaLinkedin } from "react-icons/fa";
import PointingEmoji from "../components/PointingEmoji";
import WavingEmoji from "../components/WavingEmoji";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <>
      <section id="about" className="scroll-smooth">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            className=" w-[300px] rounded-full xl:flex items-center justify-center object-cover "
            src="/images/lesegoProfile.jpg"
            alt="Portfolio Picture"
          />
          <div className="text-center xl:text-left md:ml-6 mt-4 md:mt-0">
            <WavingEmoji />
            <h3 className=" text-md lg:text-xl font-medium mb-4 text-center xl:text-left">
              I am Lesego Quincy Pitsi
            </h3>
            <span className=" text-sm  xl:text-lg text-center xl:text-left">
              I am a goal-oriented individual driven to create software products
              that solve real-world problems. It’s incredibly rewarding to see
              the positive impact technology can have on society. My strong
              curiosity, work ethic, and problem-solving skills help me excel in
              the ever-evolving tech landscape, allowing me to quickly learn and
              apply new technologies.
            </span>
            <div className=" mt-6 flex flex-row gap-x-4 justify-center md:justify-start items-center">
              <PointingEmoji />
              <a
                href="https://www.linkedin.com/in/lquincy01/"
                className=" text-sm md:text-md lg:text-lg xl:text-2xlcursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/l-quincy01"
                className="text-sm md:text-md lg:text-lg xl:text-2xlcursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://leetcode.com/u/lquincy01/"
                className="text-sm md:text-md lg:text-lg xl:text-2xlcursor-pointer"
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
