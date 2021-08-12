const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#232323",
        white: "#FFFFFF",
        tosca: "#5FECFF",
        blue: "#0254FE",
        border: "#E9EAEB",
        gray: "#808285"
      },
    },
    screens: {
      phone: { min: "300px", max: "767px" }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
