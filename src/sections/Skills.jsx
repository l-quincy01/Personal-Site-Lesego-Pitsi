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
    { name: "Java", icon: <FaJava size={30} /> },
    { name: "C#", icon: <SiCsharp size={30} /> },
    { name: "Python", icon: <FaPython size={30} /> },
    { name: "PHP", icon: <FaPhp size={30} /> },
    { name: "JavaScript", icon: <FaJsSquare size={30} /> },
    { name: "SQL", icon: <FaDatabase size={30} /> },
    { name: "HTML", icon: <FaHtml5 size={30} /> },
    { name: "CSS", icon: <FaCss3Alt size={30} /> },
  ];
  let frameworks = [
    { name: "React", icon: <FaReact size={30} /> },
    { name: "React Native", icon: <TbBrandReactNative size={30} /> },
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "Express", icon: <SiExpress size={30} /> }, // Using FaNodeJs as Express doesn't have a specific icon in react-icons
  ];

  let devTools = [
    { name: "Git", icon: <FaGitAlt size={30} /> },
    { name: "GitHub", icon: <FaGithub size={30} /> },
    { name: "Npm", icon: <FaNpm size={30} /> },
    { name: "Yarn", icon: <FaYarn size={30} /> },
    { name: "VS Code", icon: <BiLogoVisualStudio size={30} /> }, // Assuming Visual Studio Code icon from FaVisualStudio
    { name: "Visual Studio", icon: <SiVisualstudio size={30} /> }, // Assuming Visual Studio icon from FaVisualStudio
    { name: "MySQL", icon: <SiMysql size={30} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={30} /> },
  ];

  let other = [
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
    { name: "Firebase", icon: <IoLogoFirebase size={30} /> },
    { name: "Tableau", icon: <IoLogoTableau size={30} /> },
    { name: "Figma", icon: <FaFigma size={30} /> },
  ];

  return (
    <>
      <section id="skills" className="scroll-smooth">
        <div id="#skills" className="flex flex-col items-center mt-60">
          <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
            <PiLightbulbFilamentLight /> Technologies I've Used
          </h2>

          <h3 className=" font-semibold mb-1">Languages</h3>
          <SkillsCarousel skills={languages} className="overflow-hidden " />
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
