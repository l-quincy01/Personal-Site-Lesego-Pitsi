import { IoDocumentTextOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

export default function Resume() {
  return (
    <>
      <section id="resume" className="scroll-smooth">
        <div id="#resume" className="flex flex-col items-center mt-60">
          <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
            <IoDocumentTextOutline /> My Resume
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
    </>
  );
}
