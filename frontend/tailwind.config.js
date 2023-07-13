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
      almostWhite: "#FEF4DC",
      almostBlack: "#212120",
    },
    fontFamily: {
      sans: ["Grenze Gotisch", "sans-serif"],
      mono: ["Carrois Gothic"],
    },
    extend: {
      height: {
        100: "40vh",
        150: "84vh",
      },
    },
  },
  plugins: [require("daisyui")],
};
