/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        footer: "#f8f8f8",
      },
      fontFamily: {
        inter: ["Inter"],
        noto: ["Noto Sans"],
      },
    },
  },
  plugins: [],
};
