import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
  };

  return (
    <button className="text-white" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <MdLightMode className="h-6 w-6" />
      ) : (
        <MdDarkMode className="h-6 w-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;
