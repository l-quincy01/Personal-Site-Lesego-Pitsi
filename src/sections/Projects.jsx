import { MdArrowOutward } from "react-icons/md";
import Carousel from "../components/Carousel";
import ProjectView from "../components/ProjectView";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Digs Findr",
    description: `Digs Findr is a platform designed to facilitate student
      accommodation, assisting students to find their best-suited
      accommodation options near their universities and helping
      landlords to get tenants. Digs Findr aims to simplify the
      process of finding accommodation for students, particularly
      those who are new to a city or university. Built by students
      for students, it assists students who may not be familiar with
      the local rental market. Digs Findr does this by web-scraping
      local rental agencies websites and displaying them for
      students.`,
    slides: [
      "/images/Home.png",
      "/images/Home2.png",
      "/images/Register.png",
      "/images/Login.png",
      "/images/Register.png",
      "/images/ListedProperties.png",
      "/images/ViewProperty.png",
      "/images/ViewProperty2.png",
      "/images/ViewProperty3.png",
    ],
    technologies: ["React", "MongoDb", "Node.Js", "Express.Js"],
    link: "https://github.com/l-quincy01/Digs_Findr",
  },
  {
    id: 2,
    title: "Ride Findr",
    description: `Developed Ride Findr, a multi-feature mobile application using
      React Native for cross-platform functionality. This app seamlessly
      integrates ride-hailing and food delivery services. By leveraging
      React Native, various libraries and APIs this project sharpened my
      development skills and capabilities.`,
    slides: [
      "/images/rideFindrHome.png",
      "/images/rideFindrSearch.png",
      "/images/rideFindrNav.png",
      "/images/rideFindrRides2.png",
    ],
    technologies: ["React Native", "NativeWind", "Redux", "Google Maps API"],
    link: "https://github.com/l-quincy01/Ride_Findr",
  },
  {
    id: 3,
    title: "Pathfinding Visualizer",
    description: `Pathfinding Visualizer is a web application built with React that
      visualizes the Dijkstra algorithm, a popular pathfinding algorithm
      used to find the shortest path between nodes in a graph. This
      project is designed to provide an interactive way to understand
      how the algorithm works, making it easier for users to see the
      steps involved in finding the shortest path from a start node to a
      finish node on a grid.`,
    slides: [
      "/images/vis1.png",
      "/images/vis2.png",
      "/images/vis3.png",
      "/images/vis4.png",
      "/images/vis5.png",
      "/images/vis6.png",
    ],
    technologies: ["React", "Algorithms"],
    link: "https://github.com/l-quincy01/pathfinding-visualizer",
  },
  {
    id: 4,
    title: "Quiz Game",
    description: `Simple quiz game mobile App. Made entirely in react-native`,
    slides: [
      "/images/Q1.PNG",
      "/images/Q2.PNG",
      "/images/Q3.PNG",
      "/images/Q4.PNG",
      "/images/Q5.PNG",
      "/images/Q6.PNG",
      "/images/Q7.PNG",
    ],
    technologies: ["React Native"],
    link: "https://github.com/l-quincy01/Quiz-Game",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section
      id="projects"
      className="scroll-smooth flex flex-col space-y-10 items-center justify-center mt-60"
    >
      {projects.map((project) => (
        <>
          {/*
          FEATURE TO BE ADDED LATER
          {selectedProject && (
            <div
              className={`absolute z-100 ${
                selectedProject ? "block" : "hidden"
              }`}
            >
              <ProjectView
                title={selectedProject.title}
                description={selectedProject.description}
                slides={selectedProject.slides}
                link={selectedProject.link}
              />
            </div>
          )} */}
          <div
            key={project.id}
            className="flex flex-col justify-center items-center"
          >
            <div className="flex flex-row items-start justify-center gap-x-6">
              <div
                // onClick={() => handleProjectClick(project)}
                className=" mt-7 hidden lg:flex lg:flex-row gap-2"
              >
                <Carousel
                  className="hidden md:flex md:w-full"
                  slides={project.slides}
                />
              </div>
              <div className="flex flex-col  justify-center mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex  items-center space-x-2 text-lg font-semibold group"
                >
                  <h3 className="cursor-pointer text-left">{project.title}</h3>
                  <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                </a>
                <span className="text-sm  xl:text-lg">
                  {project.description}
                </span>
                <div className=" hidden lg:flex lgflex-row mt-4 gap-2">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology}
                      className="font-roboto py-2 px-4 text-xs rounded-3xl text-white bg-cyan-500 shadow-lg shadow-cyan-500/50"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" hidden lg:hidden md:flex md:flex-row gap-2">
              <Carousel
                className="hidden md:flex md:w-full"
                slides={project.slides}
              />
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
