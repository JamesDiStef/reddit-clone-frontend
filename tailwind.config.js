/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "templates/**.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
