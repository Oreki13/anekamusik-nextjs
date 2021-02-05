module.exports = {
  purge: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover", "focus"],
      backgroundColor: ["checked"],
      textColor: ["disabled"],
      borderColor: ["checked"],
      outline: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
