const { default: tailwind } = require("tailwind-rn");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f6f6f8",
          100: "#ecedf1",
          200: "#d0d1dc",
          300: "#b3b6c7",
          400: "#7b7f9e",
          500: "#424874",
          600: "#3b4168",
          700: "#323657",
          800: "#282b46",
          900: "#202339",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
