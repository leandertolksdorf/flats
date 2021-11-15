const { default: tailwind } = require("tailwind-rn");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f6fa",
          100: "#e8eef5",
          200: "#c6d4e6",
          300: "#a4bad6",
          400: "#5f86b8",
          500: "#1b5299",
          600: "#184a8a",
          700: "#143e73",
          800: "#10315c",
          900: "#0d284b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
