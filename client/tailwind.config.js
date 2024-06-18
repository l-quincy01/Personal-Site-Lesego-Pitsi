/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/**/*.js", // Adjust this path if needed
  ],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
      colors: {
        primary: "#ADD8E6",
      },
      screens: {
        md: "940px", // Default is 768px; you can change this value to whatever you need.
        lg: "1180px", // Default is 768px; you can change this value to whatever you need.
      },
      aspectRatio: {
        rectangle: "4/3",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
        point: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "200%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        wave: "wave 1.2s infinite",
        point: "point 1.2s infinite",
        scroll: "scroll 10s linear infinite",
      },
      variants: {
        extend: {
          animation: ["hover"],
          scrollBehavior: ["smooth"],
        },
      },
    },
  },
  plugins: [],
};
