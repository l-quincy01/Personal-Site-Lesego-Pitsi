import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";
import "./SkillsCarousel.css"; // Make sure to create and import this CSS file

const SkillsCarousel = ({ skills }) => {
  return (
    <div
      className={` grid grid-cols-4 md:flex md:flex-row overflow-hidden relative h-30 justify-center `}
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex my-6 mx-1 md:mx-6 flex-col items-center justify-center text-center text-xs`}
        >
          {skill.icon}
          {skill.name}
        </div>
      ))}
    </div>
  );
};

SkillsCarousel.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default SkillsCarousel;
