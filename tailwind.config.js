const { default: tailwind } = require("tailwind-rn");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f5f6",
          100: "#ebebed",
          200: "#ccccd2",
          300: "#aeaeb7",
          400: "#717180",
          500: "#34344a",
          600: "#2f2f43",
          700: "#272738",
          800: "#1f1f2c",
          900: "#191924",
        },
        secondary: {
          50: "#fdf4f9",
          100: "#fbe9f3",
          200: "#f5c8e0",
          300: "#efa7cd",
          400: "#e366a8",
          500: "#d72483",
          600: "#c22076",
          700: "#a11b62",
          800: "#81164f",
          900: "#691240",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
