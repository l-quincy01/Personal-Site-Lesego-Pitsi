import { MdArrowOutward } from "react-icons/md";
import Carousel from "../components/Carousel";
import { HiOutlineCode } from "react-icons/hi";

let slidesDigFindr = [
  "/images/Home.png",
  "/images/Home2.png",
  "/images/Register.png",
  "/images/Login.png",
  "/images/Register.png",
  "/images/ListedProperties.png",
  "/images/ViewProperty.png",
  "/images/ViewProperty2.png",
  "/images/ViewProperty3.png",
];
let slidesRideFindr = [
  "/images/rideFindrHome.png",
  "/images/rideFindrSearch.png",
  "/images/rideFindrNav.png",
  "/images/rideFindrRides2.png",
];
let slidesPathfinding = [
  "/images/vis1.png",
  "/images/vis2.png",
  "/images/vis3.png",
  "/images/vis4.png",
  "/images/vis5.png",
  "/images/vis6.png",
];

export default function Projects() {
  return (
    <>
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
                those who are new to a city or university. Built by students for
                students, it assists students who may not be familiar with the
                local rental market. Digs Findr does this by web-scraping local
                rental agencies websites and displaying them for students.
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
              React Native for cross-platform functionality. This app seamlessly
              integrates ride-hailing and food delivery services. By leveraging
              React Native, various libraries and APIs this project sharpened my
              development skills and capabilities.
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
              Pathfinding Visualizer is a web application built with React that
              visualizes the Dijkstra algorithm, a popular pathfinding algorithm
              used to find the shortest path between nodes in a graph. This
              project is designed to provide an interactive way to understand
              how the algorithm works, making it easier for users to see the
              steps involved in finding the shortest path from a start node to a
              finish node on a grid.
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
    </>
  );
}
