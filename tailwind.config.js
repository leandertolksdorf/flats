const { default: tailwind } = require("tailwind-rn");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f6f5f8",
          100: "#edecf1",
          200: "#d2cfdc",
          300: "#b7b2c7",
          400: "#81799c",
          500: "#4b3f72",
          600: "#443967",
          700: "#382f56",
          800: "#2d2644",
          900: "#251f38",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
