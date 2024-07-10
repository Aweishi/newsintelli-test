/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.html",
    "./layout/**/*.ejs",
    "./main.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#69F0AE",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
