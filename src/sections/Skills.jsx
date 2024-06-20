import { PiLightbulbFilamentLight } from "react-icons/pi";
import SkillsCarousel from "../components/SkillsCarousel";

import { FaGithub } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

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
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaGitAlt, FaNpm, FaYarn } from "react-icons/fa";

import { FaFigma } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

export default function Skills() {
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
      <section id="skills" className="scroll-smooth">
        <div id="#skills" className="flex flex-col items-center mt-20 md:mt-40">
          <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
            <PiLightbulbFilamentLight /> Skills
          </h2>

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
    </>
  );
}
