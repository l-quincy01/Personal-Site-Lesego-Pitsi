import { MdArrowOutward } from "react-icons/md";
import Carousel from "./Carousel";

export default function ProjectView(title, description, slides, link) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-semibold">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex  items-center space-x-2 text-lg font-semibold group"
        >
          <h3 className="cursor-pointer text-left">{title}</h3>
          <MdArrowOutward className="transition-transform transform group-hover:translate-x-1 group-active:translate-x-2" />
        </a>
      </div>

      <div>
        <Carousel slides={slides} />
      </div>

      <div>{description}</div>
    </div>
  );
}
