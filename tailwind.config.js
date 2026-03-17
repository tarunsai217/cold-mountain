/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', "serif"],
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        cream: "#f5f0e8",
        "warm-white": "#faf8f4",
        clay: "#b87b5a",
        "clay-light": "#d4a98a",
        "clay-dark": "#8c5a3c",
        earth: "#5c4a3a",
        "earth-light": "#8a7060",
        charcoal: "#2a2420",
        stone: "#9a9088",
      },
    },
  },
  plugins: [],
};
