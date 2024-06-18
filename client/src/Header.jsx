import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowHamburgerMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed w-full bg-white z-10 shadow-sm rounded-xl">
      <div className="py-4 border-b-[1px]">
        <div className="xl:px-20 md:px-10 sm:px-2 px-2">
          <div className="flex flex-row items-center justify-center gap-6 md:gap-0">
            {!showHamburgerMenu && (
              <>
                <a href="#about" className="flex items-center gap-1">
                  <span className="font-bold text-2xl">LP</span>
                </a>
                <div
                  onClick={() => setShowHamburgerMenu(true)}
                  className="block md:hidden fixed right-3 text-md font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                >
                  <CiMenuBurger />
                </div>
              </>
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
                      <a
                        href="#about"
                        onClick={() => setShowHamburgerMenu(false)}
                      >
                        About me
                      </a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a
                        href="#projects"
                        onClick={() => setShowHamburgerMenu(false)}
                      >
                        Projects
                      </a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a
                        href="#skills"
                        onClick={() => setShowHamburgerMenu(false)}
                      >
                        Skills
                      </a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a
                        href="#resume"
                        onClick={() => setShowHamburgerMenu(false)}
                      >
                        Resume
                      </a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a
                        href="#education"
                        onClick={() => setShowHamburgerMenu(false)}
                      >
                        Education
                      </a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a
                        href="#writings"
                        onClick={() => setShowHamburgerMenu(false)}
                      >
                        Writings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div className="hidden md:block text-sm font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <a href="#about">About Me</a>
            </div>
            <div className="hidden md:block text-sm font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <a href="#projects">Projects</a>
            </div>
            <div className="hidden md:block text-sm font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <a href="#skills">Skills</a>
            </div>
            <div className="hidden md:block text-sm font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <a href="#resume">Resume</a>
            </div>
            <div className="hidden md:block text-sm font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <a href="#education">Education</a>
            </div>
            <div className="hidden md:block text-sm font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              <a href="#writings">Writings</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
