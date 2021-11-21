const { default: tailwind } = require("tailwind-rn");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: {
        //   50: "#f2f4f8",
        //   100: "#e6eaf2",
        //   200: "#bfcade",
        //   300: "#99a9ca",
        //   400: "#4d69a2",
        //   500: "#00297a",
        //   600: "#00256e",
        //   700: "#001f5c",
        //   800: "#001949",
        //   900: "#00143c",
        // },
        primary: {
          50: "#f5f5f6",
          100: "#eaecee",
          200: "#cbcfd4",
          300: "#abb3ba",
          400: "#6d7986",
          500: "#2e4052",
          600: "#293a4a",
          700: "#23303e",
          800: "#1c2631",
          900: "#171f28",
        },
        // secondary: {
        //   50: "#f9faff",
        //   100: "#f2f5ff",
        //   200: "#dfe5ff",
        //   300: "#ccd5ff",
        //   400: "#a5b6ff",
        //   500: "#7f96ff",
        //   600: "#7287e6",
        //   700: "#5f71bf",
        //   800: "#4c5a99",
        //   900: "#3e4a7d",
        // },
        secondary: {
          50: "#fef5f6",
          100: "#fdebed",
          200: "#f9ced1",
          300: "#f5b0b5",
          400: "#ee747e",
          500: "#e63946",
          600: "#cf333f",
          700: "#ad2b35",
          800: "#8a222a",
          900: "#711c22",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
