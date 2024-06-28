import { FaMedium, FaPenFancy } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { SiAcademia } from "react-icons/si";

export default function Writings() {
  return (
    <>
      <section id="writings" className="scroll-smooth">
        <div className="flex flex-col items-center mt-60">
          <h2 className="text-2xl font-bold text-center mb-6 flex items-center gap-2">
            <FaPenFancy /> My Writings
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
                    Medium Articles
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
                  className="inline-flex items-center space-x-2 text-lg font-semibold group "
                >
                  <h3 className="underline text-sm lg:text-md xl:text-lg">
                    Academic Research
                  </h3>
                  <SiAcademia />
                  <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
