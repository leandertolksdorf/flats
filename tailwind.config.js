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
          50: "#f9faff",
          100: "#f2f5ff",
          200: "#dfe5ff",
          300: "#ccd5ff",
          400: "#a5b6ff",
          500: "#7f96ff",
          600: "#7287e6",
          700: "#5f71bf",
          800: "#4c5a99",
          900: "#3e4a7d",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
