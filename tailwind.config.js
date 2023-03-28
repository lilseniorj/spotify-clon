/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotify: {
          black: "#151515",
          green: "#1DB954",
          gray: "#101010",
          lightgray: "#1d1d1d",
          lightgrayHover: "#282828",
        },
      },
    },
  },
  plugins: [],
};