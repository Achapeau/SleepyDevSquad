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
    keyframes: {
      wave: {
        "0%": { transform: "rotate(0.0deg)" },
        "10%": { transform: "rotate(14deg)" },
        "20%": { transform: "rotate(-8deg)" },
        "30%": { transform: "rotate(14deg)" },
        "40%": { transform: "rotate(-4deg)" },
        "50%": { transform: "rotate(10.0deg)" },
        "60%": { transform: "rotate(0.0deg)" },
        "100%": { transform: "rotate(0.0deg)" },
      },
    },
    animation: {
      "waving-caross": "wave 2s linear infinite",
    },

    extend: {
      height: {
        100: "40vh",
        150: "84vh",
        200: "100vh"
      },
    },
  },

  plugins: [require("daisyui")],
};
