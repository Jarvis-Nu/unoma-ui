/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue": "#008BEE",
        "purple": "#4E5275",
        "lightPurple": "#343646"
      },
      textColor: {
        "blue": "#008BEE",
        "gray": "#999999"
      },
      borderColor: {
        "purple": "#4E5275"
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}