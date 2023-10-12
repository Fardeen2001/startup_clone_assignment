/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "rgba(21, 20, 57, 0.4)",
      },
    },
    colors: {
      ...colors,
      actionPrimary: "#25DAC5",
      actionSecondary: "#482BE7",
      actionThird: "#E93A7D",
      backgroundDark: "#2F1893",
      backgroundLight: "#FFF",
      gray: "#EBEAED",
      heading: "#1E0E62",
      twitter: "#1DA1F2",
    },
  },
  plugins: [],
};
