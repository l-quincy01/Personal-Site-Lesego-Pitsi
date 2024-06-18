import {
  FaLinkedin,
  FaRegCalendarAlt,
  FaPenFancy,
  FaGithub,
  FaMedium,
} from "react-icons/fa";
import { SiLeetcode, SiAcademia, SiCsharp } from "react-icons/si";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import { HiOutlineCode, HiOutlineAcademicCap } from "react-icons/hi";

import {
  FaJava,
  FaCss3Alt,
  FaPython,
  FaPhp,
  FaJsSquare,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5";
import { FaReact, FaNodeJs, FaMobileAlt } from "react-icons/fa";
import { FaGitAlt, FaNpm, FaYarn } from "react-icons/fa";

import { FaFigma } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

import { PiLightbulbFilamentLight } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import WavingEmoji from "../WavingEmoji";
import PointingEmoji from "../PointingEmoji";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import Carousel from "../Carousel";
import SkillsCarousel from "../SkillsCarousel";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function IndexPage() {
  let slidesDigFindr = [
    "./images/Home.png",
    "./images/Home2.png",
    "./images/Register.png",
    "./images/Login.png",
    "./images/Register.png",
    "./images/ListedProperties.png",
    "./images/ViewProperty.png",
    "./images/ViewProperty2.png",
    "./images/ViewProperty3.png",
  ];
  let slidesRideFindr = [
    "./images/rideFindrHome.png",
    "./images/rideFindrSearch.png",
    "./images/rideFindrNav.png",
    "./images/rideFindrRides2.png",
  ];
  let slidesPathfinding = [
    "./images/vis1.png",
    "./images/vis2.png",
    "./images/vis3.png",
    "./images/vis4.png",
    "./images/vis5.png",
    "./images/vis6.png",
  ];

  let languages = [
    { name: "Java", icon: <FaJava size={50} /> },
    { name: "C#", icon: <SiCsharp size={50} /> },
    { name: "Python", icon: <FaPython size={50} /> },
    { name: "PHP", icon: <FaPhp size={50} /> },
    { name: "JavaScript", icon: <FaJsSquare size={50} /> },
    { name: "SQL", icon: <FaDatabase size={50} /> },
    { name: "HTML", icon: <FaHtml5 size={50} /> },
    { name: "CSS", icon: <FaCss3Alt size={50} /> },
  ];
  let frameworks = [
    { name: "React", icon: <FaReact size={50} /> },
    { name: "React Native", icon: <TbBrandReactNative size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "Express", icon: <SiExpress size={50} /> }, // Using FaNodeJs as Express doesn't have a specific icon in react-icons
  ];

  let devTools = [
    { name: "Git", icon: <FaGitAlt size={50} /> },
    { name: "GitHub", icon: <FaGithub size={50} /> },
    { name: "Npm", icon: <FaNpm size={50} /> },
    { name: "Yarn", icon: <FaYarn size={50} /> },
    { name: "VS Code", icon: <BiLogoVisualStudio size={50} /> }, // Assuming Visual Studio Code icon from FaVisualStudio
    { name: "Visual Studio", icon: <SiVisualstudio size={50} /> }, // Assuming Visual Studio icon from FaVisualStudio
    { name: "MySQL", icon: <SiMysql size={50} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={50} /> },
  ];

  let other = [
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "Firebase", icon: <IoLogoFirebase size={50} /> },
    { name: "Tableau", icon: <IoLogoTableau size={50} /> },
    { name: "Figma", icon: <FaFigma size={50} /> },
  ];

  return (
    <>
      <div className="px-1 flex flex-col justify-center mt-4">
        {/* <img className=" xl:hidden w-[400px] rounded-full object-cover justify-center flex items-center" src="https://lesedipitsi.com/assets/avatar-e2fb5a03.webp" alt="Portfolio Picture" /> */}

        <section id="about" className="scroll-smooth">
          <div className="flex flex-col lg:flex-row items-center">
            <img
              className=" w-[400px] rounded-full xl:flex items-center justify-center object-cover "
              src="./images/lesegoProfile.jpg"
              alt="Portfolio Picture"
            />
            <div className="text-center xl:text-left md:ml-6 mt-4 md:mt-0">
              <WavingEmoji />
              <h3 className=" text-md lg:text-xl font-medium mb-4 text-center xl:text-left">
                I am Lesego Quincy Pitsi
              </h3>
              <span className=" text-sm  xl:text-lg text-center xl:text-left">
                I am a goal-oriented individual driven to create software
                products that solve real-world problems. It’s incredibly
                rewarding to see the positive impact technology can have on
                society. My strong curiosity, work ethic, and problem-solving
                skills help me excel in the ever-evolving tech landscape,
                allowing me to quickly learn and apply new technologies.
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

        <section id="projects" className="scroll-smooth">
          <div
            id="#projects"
            className="flex flex-col items-center mt-20 md:mt-40"
          >
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
              <HiOutlineCode /> Projects
            </h2>

            <div className=" flex flex-col xl:grid xl:grid-cols-[1fr_2fr] gap-6 p-4 ">
              <div className="hidden xl:block  ">
                <Carousel
                  className="hidden md:block md:w-full"
                  slides={slidesDigFindr}
                />
              </div>

              <div className="md:w-full">
                <div>
                  <a
                    href="https://github.com/l-quincy01/Digs_Findr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-lg font-semibold group"
                  >
                    <h3 className="cursor-pointer">Digs Findr</h3>
                    <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                  </a>
                </div>
                <span className="text-sm lg:text-md xl:text-lg">
                  Digs Findr is a platform designed to facilitate student
                  accommodation, assisting students to find their best-suited
                  accommodation options near their universities and helping
                  landlords to get tenants. Digs Findr aims to simplify the
                  process of finding accommodation for students, particularly
                  those who are new to a city or university. Built by students
                  for students, it assists students who may not be familiar with
                  the local rental market. Digs Findr does this by web-scraping
                  local rental agencies websites and displaying them for
                  students.
                </span>
                <div className="hidden xl:flex mt-4 flex-row gap-2">
                  <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                    React
                  </div>
                  <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                    MongoDb
                  </div>
                  <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                    Node.Js
                  </div>
                  <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                    Express.Js
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:hidden md:block ">
              <Carousel
                className="hidden md:block md:w-full"
                slides={slidesDigFindr}
              />
            </div>
          </div>

          <div className="flex flex-col xl:grid xl:grid-cols-[1fr_2fr] gap-6 p-4 ">
            <div className="hidden xl:block  ">
              <Carousel
                className="hidden md:block md:w-full"
                slides={slidesRideFindr}
              />
            </div>

            <div className="md:w-full">
              <div>
                <a
                  href="https://github.com/l-quincy01/Ride_Findr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-lg font-semibold group"
                >
                  <h3 className="cursor-pointer">Ride Findr</h3>
                  <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                </a>
              </div>
              <span className="text-sm lg:text-md xl:text-lg">
                Developed Ride Findr, a multi-feature mobile application using
                React Native for cross-platform functionality. This app
                seamlessly integrates ride-hailing and food delivery services.
                By leveraging React Native, various libraries and APIs this
                project sharpened my development skills and capabilities.
              </span>
              <div className="hidden xl:flex mt-4 flex-row gap-2">
                <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                  React Native
                </div>
                <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                  NativeWind
                </div>
                <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                  Redux
                </div>
                <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                  Google Maps/places API
                </div>
              </div>
              <div className="hidden xl:hidden md:block ">
                <Carousel
                  className="hidden md:block md:w-full"
                  slides={slidesRideFindr}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:grid xl:grid-cols-[1fr_2fr] gap-6 p-4 ">
            <div className="hidden xl:block  ">
              <Carousel
                className="hidden md:block md:w-full"
                slides={slidesPathfinding}
              />
            </div>

            <div className="md:w-full">
              <div>
                <a
                  href="https://github.com/l-quincy01/pathfinding-visualizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-lg font-semibold group"
                >
                  <h3 className="cursor-pointer"> Pathfinding Visualizer </h3>
                  <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                </a>
              </div>
              <span className="text-sm lg:text-md xl:text-lg">
                Pathfinding Visualizer is a web application built with React
                that visualizes the Dijkstra algorithm, a popular pathfinding
                algorithm used to find the shortest path between nodes in a
                graph. This project is designed to provide an interactive way to
                understand how the algorithm works, making it easier for users
                to see the steps involved in finding the shortest path from a
                start node to a finish node on a grid.
              </span>
              <div className="hidden xl:flex mt-4 flex-row gap-2">
                <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                  React
                </div>
                <div className="p-2 rounded-2xl text-gray-400 border-2 border-primary">
                  Algorithims
                </div>
              </div>
              <div className="hidden xl:hidden md:block ">
                <Carousel
                  className="hidden md:block md:w-full"
                  slides={slidesPathfinding}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-smooth">
          <div
            id="#skills"
            className="flex flex-col items-center mt-20 md:mt-40"
          >
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
              <PiLightbulbFilamentLight /> Skills
            </h2>
            {/* <div className=" text-sm lg:text-md xl:text-lg flex  text-center lg:flex-row justify-center flex-col gap-6 p-4 md:p-10 w-full">
              <div className="">
                <h3 className="font-semibold mb-1">Languages</h3>
                <ul className="gap-2">
                  <li className="font-light">Java (8 or later)</li>
                  <li className="font-light">C#</li>
                  <li className="font-light">Python</li>
                  <li className="font-light">PHP</li>
                  <li className="font-light">JavaScript</li>
                  <li className="font-light">SQL</li>
                  <li className="font-light">HTML</li>
                  <li className="font-light">CSS (Tailwind)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Libraries & Frameworks</h3>
                <ul className="gap-2">
                  <li className="font-light">React</li>
                  <li className="font-light">React Native</li>
                  <li className="font-light">Node</li>
                  <li className="font-light">Express</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Dev Tools</h3>
                <ul className="gap-2">
                  <li className="font-light">Git</li>
                  <li className="font-light">GitHub</li>
                  <li className="font-light">Npm</li>
                  <li className="font-light">Yarn</li>
                  <li className="font-light">VS Code</li>
                  <li className="font-light">Visual Studio</li>
                  <li className="font-light">MSySQL Server</li>
                  <li className="font-light">PostgresSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Other</h3>
                <ul className="gap-2">
                  <li className="font-light">MongoDB</li>
                  <li className="font-light">Firebase</li>
                  <li className="font-light">Tableau</li>
                  <li className="font-light">Figma</li>
                </ul>
              </div>
            </div> */}
            <h3 className=" font-semibold mb-1">Languages</h3>
            <SkillsCarousel className="w-1/2" skills={languages} />
            <h3 className=" font-semibold mb-1">Libraries & Frameworks</h3>
            <SkillsCarousel skills={frameworks} />
            <h3 className=" font-semibold mb-1">Dev Tools</h3>
            <SkillsCarousel skills={devTools} />
            <h3 className=" font-semibold mb-1">Other</h3>
            <SkillsCarousel skills={other} />
          </div>
        </section>

        <section id="resume" className="scroll-smooth">
          <div
            id="#resume"
            className="flex flex-col items-center mt-20 md:mt-40"
          >
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
              <IoDocumentTextOutline /> Resume
            </h2>
            <div className="flex justify-center items-center w-full">
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vQME4HZtGuQYSG20f_QwivWkYChXYLJ6NlD2BkBWpvvF9R8f0ydd5jAYyLM_o410w/pub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-lg font-semibold group"
              >
                <h3 className="text-sm lg:text-md xl:text-lg cursor-pointer">
                  View My CV
                </h3>
                <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
              </a>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-smooth">
          <div className="flex flex-col items-center mt-20 md:mt-40">
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
              <HiOutlineAcademicCap /> Education
            </h2>
            <div className="flex justify-center flex-row gap-6 p-4 md:p-10 w-full">
              <div>
                <a
                  href="https://veri-quik.com/verify/51016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-lg font-semibold group"
                >
                  <h3 className="underline text-sm lg:text-md xl:text-lg">
                    Rhodes University
                  </h3>
                  <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                </a>
                <ul>
                  <li className="font-semibold flex text-sm lg:text-md xl:text-lg">
                    BSc Computer Science and Information Systems{" "}
                    <span className=" hidden md:hidden xl:block ml-10 font-light xl:flex  items-center md:gap-x-2 md:items-center">
                      <FaRegCalendarAlt /> 2021 - 2024
                    </span>
                  </li>
                  <ul className="ml-10 list-disc">
                    <li className="text-sm lg:text-md xl:text-lg">Chess</li>
                    <li className="text-sm lg:text-md xl:text-lg">
                      Golden Key Society
                    </li>
                    <li className="text-sm lg:text-md xl:text-lg">
                      Boxing and MMA
                    </li>
                  </ul>
                  <li className="font-semibold flex mt-4 text-sm lg:text-md xl:text-lg">
                    BSc Computer Science and Information Systems{" "}
                    <span className="hidden md:hidden xl:block ml-10 font-light xl:flex items-center lg:gap-x-2 lg:items-center">
                      <FaRegCalendarAlt /> 2024 - 2024
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="writings" className="scroll-smooth">
          <div className="flex flex-col items-center mt-20 md:mt-40">
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
              <FaPenFancy /> Writing
            </h2>
            <div className="flex flex-col gap-6 p-4 md:p-10 w-full">
              <div className="flex flex-col text-center">
                <div>
                  <a
                    href="https://medium.com/@l.quincypitsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-lg font-semibold group"
                  >
                    <h3 className="underline text-sm lg:text-md xl:text-lg">
                      My Medium Articles
                    </h3>
                    <FaMedium />
                    <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.researchgate.net/profile/Quincy-Pitsi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-lg font-semibold group"
                  >
                    <h3 className="underline text-sm lg:text-md xl:text-lg">
                      My Academic Research
                    </h3>
                    <SiAcademia />
                    <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
