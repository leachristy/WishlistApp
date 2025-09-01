/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
        "cherry": ["Cherry Bomb One", "cursive"],
        "tasa-explorer": ["TASA Explorer", "sans-serif"],
        "rubik": ["Rubik", "sans-serif"],
      },

      colors: {
        "off-white": "#FAF9F6",
        "red": "#E60023",
        "pink": "#E75480",
      },
    },
  },
  plugins: [],
};
