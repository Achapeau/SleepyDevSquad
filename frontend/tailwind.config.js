/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#F20530",
      blue: "#5881A6",
      yellow: "#F2B705",
      brown: "#BFA27E",
      orange: "#F27405",
    },
    fontFamily: {
      sans: ["Grenze Gotisch", "sans-serif"],
      mono: ["Carrois Gothic"],
    },
    extend: {},
  },
  plugins: [],
};