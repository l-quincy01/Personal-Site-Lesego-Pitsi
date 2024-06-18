import React from "react";

const PointingEmoji = () => {
  return (
    <div className="font-light text-sm  lg:text-md xl:text-xl flex flex-row items-center gap-4 ">
      <span className="block md:hidden  xl:block">Get in touch</span>{" "}
      <span className=" mx-1 text-sm md:text-lg lg:text-xl xl:text-3xl  inline-block animate-point">
        👉
      </span>
    </div>
  );
};

export default PointingEmoji;
