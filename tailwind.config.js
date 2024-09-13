/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "templates/**.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        small: "700px",
      },
    },
  },
  plugins: [require("daisyui")],
};
