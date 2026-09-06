/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:  "rgb(203, 11, 11)",
          teal: "#00e6d3",
        },
      },
      fontFamily: {
        display: ["'Lalezar'", "cursive"],
        sans:    ["'Inter'", "'Segoe UI'", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

