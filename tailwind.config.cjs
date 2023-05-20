/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: "130px",
    },
    mobile_container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
