const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
        amatic: ["Georgia", "Times New Roman", "serif"],
      },
      colors: {
        primary: "#ff4440",
      },
    },
  },
};
