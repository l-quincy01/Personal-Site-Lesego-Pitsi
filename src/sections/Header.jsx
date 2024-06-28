import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Header() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShow(false);
      } else {
        // if scrolling up, show the navbar
        setShow(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

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
    <header
      className={`fixed w-full z-10 transition-transform duration-300 transform ${
        show ? "translate-y-0" : "-translate-y-full  "
      }`}
    >
      <div className="py-4 bg-white">
        <div className="xl:px-20 md:px-10 sm:px-2 px-2">
          {/* transition-transform duration-300 transform ${show ? 'translate-y-0' : '-translate-y-full'} */}
          <div
            className={`flex flex-row items-center justify-center gap-6 md:gap-0`}
          >
            {!showHamburgerMenu && (
              <>
                <a href="#about" className="flex items-center gap-1">
                  <span className="font-bold text-2xl  text-shadow-sm shadow-cyan-500 text-cyan-600">
                    LP
                  </span>
                </a>
                <div
                  onClick={() => setShowHamburgerMenu(true)}
                  className={`block md:hidden fixed right-3 text-md font-semibold p-3 rounded-full hover:bg-neutral-100 transition cursor-pointer transform ${
                    show ? "translate-y-0" : "-translate-y-0  "
                  }`}
                >
                  <CiMenuBurger />
                </div>
              </>
            )}
            {showHamburgerMenu && (
              <>
                <div
                  className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 transition-opacity duration-300"
                  onClick={() => setShowHamburgerMenu(false)}
                ></div>
                <div className="MOBILE-MENU flex flex-col lg:hidden bg-white w-full  h-screen justify-center items-center fixed top-0 left-0 z-30 transform transition-transform duration-300 ease-in-out">
                  <div
                    className="absolute top-0 right-0 p-8 cursor-pointer"
                    onClick={() => setShowHamburgerMenu(false)}
                  >
                    <IoCloseOutline size={30} />
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
              </>
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
