import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";

export default function Education() {
  return (
    <>
      <section id="education" className="scroll-smooth">
        <div className="flex flex-col items-center mt-60">
          <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
            <HiOutlineAcademicCap /> My Education
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
                    Dev Soc (2022)
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
    </>
  );
}
