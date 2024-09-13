/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**.{html,js}", "./**/*.{html,js}", "src/templates/about.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
