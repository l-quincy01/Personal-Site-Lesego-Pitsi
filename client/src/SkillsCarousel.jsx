// src/components/SkillsCarousel.js
//import React from "react";
import "tailwindcss/tailwind.css";

const SkillsCarousel = ({ skills }) => {
  return (
    <div className="overflow-hidden relative w-full h-30 flex justify-center">
      <div className="flex ">
        {skills.map((skill, index) => (
          <div key={index} className="flex-shrink-0 m-4 text-center">
            <div className="text-center">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
