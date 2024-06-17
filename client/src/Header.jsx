import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";



export default function Header() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);


  return (
    <header className="fixed w-full bg-white z-10 shadow-sm rounded-xl">
      <div className="py-4  border-b-[1px] ">
        <div className=" xl:px-20 md:px-10 sm:px-2 px-2">
          <div className="flex flex-row  items-center  justify-center gap-6 md:gap-0">

            {!showHamburgerMenu && (
              <>
                <Link to={"/"} className="flex items-center gap-1">
                  <span className="font-bold text-2xl">LP</span>
                </Link>
                <div onClick={() => setShowHamburgerMenu(true)} className=" block md:hidden fixed right-3 text-md  font-semibold  p-3 rounded-full  hover:bg-neutral-100  transition  cursor-pointer">
                  <CiMenuBurger />
                </div></>
            )}
            {showHamburgerMenu && (
              <div className="MOBILE-MENU flex lg:hidden">
                <div>
                  <div
                    className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
                    onClick={() => setShowHamburgerMenu(false)}
                  >

                    <IoCloseOutline />
                  </div>
                  <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="/about">About me</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="/portfolio">Projects</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="/contact">Skills</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="/portfolio">Resume</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="/contact">Writings</a>
                    </li>
                  </ul>
                </div>
              </div>
            )

            }
            <div className=" hidden md:block text-sm  font-semibold  p-3 rounded-full  hover:bg-neutral-100  transition  cursor-pointer">
              About Me
            </div>
            <div className=" hidden md:block text-sm  font-semibold  p-3 rounded-full  hover:bg-neutral-100  transition  cursor-pointer">
              Projects
            </div>
            <div className=" hidden md:block text-sm  font-semibold  p-3 rounded-full  hover:bg-neutral-100  transition  cursor-pointer">
              Skills
            </div>
            <div className=" hidden md:block text-sm  font-semibold  p-3 rounded-full  hover:bg-neutral-100  transition  cursor-pointer">
              Resume
            </div>
            <div className=" hidden md:block text-sm  font-semibold  p-3 rounded-full  hover:bg-neutral-100  transition  cursor-pointer">
              Writings
            </div>
          </div>

        </div>
      </div>


    </header>
  );
}
{/*
<section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div>
            <div
              className="absolute top-0 right-0 px-8 py-8"
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      */}