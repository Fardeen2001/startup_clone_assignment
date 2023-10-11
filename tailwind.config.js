/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      actionPrimary: "#25DAC5",
      actionSecondary: "#482BE7",
      actionThird: "#E93A7D",
      backgroundDark: "#2F1893",
    },
  },
  plugins: [],
};
