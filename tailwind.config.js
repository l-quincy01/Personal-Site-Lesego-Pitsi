/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      // textShadow: {
      //   cyan: "0 2px 4px rgba(0, 255, 255, 0.5)",
      // },
      fontFamily: {
        // sans: ["Roboto", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
        sans: ["Roboto Mono", "monospace"],
        // sans: ["Source Code Pro", "monospace"],
        // sans: ["Oswald", "sans-serif"],
        // sans: ["Nunito Sans", "sans-serif"],
      },
      scrollBehavior: ["smooth"],
      colors: {
        primary: "#ADD8E6",
      },
      screens: {
        md: "940px", // Default is 768px;
        lg: "1180px", // Default is ?
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
        loopScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        wave: "wave 1.2s infinite",
        point: "point 1.2s infinite",
        loopScroll: "loopScroll 50s linear infinite",
      },
      variants: {
        extend: {
          animation: ["hover"],
          scrollBehavior: ["smooth"],
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
