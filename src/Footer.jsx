export default function Footer() {
  return (
    <div className="w-full bg-white shadow-sm p-5">
      <div className="py-4  border-t-[2px]  ">
        <div className=" xl:px-20 md:px-10 sm:px-2 px-2 flex flex-col gap-y-4 justify-center items-center">
          <div className=" hidden md:block  flex flex-row  items-center  justify-center gap-20 md:gap-0">
            <a
              href="https://www.linkedin.com/in/lquincy01/"
              className="text-md mx-2 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/l-quincy01"
              className="text-md mx-2 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/lquincy01/"
              className="text-md mx-2 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
            <a
              href="mailto:lqplsg@gmail.com"
              className="text-md mx-2 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
          <div className="font-medium text-md">© Lesego Quincy Pitsi 2023</div>
        </div>
      </div>
    </div>
  );
}
