/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mikado-yellow': '#FFBE0B',
        'willpower-orange': '#FB5607',
        'vivid-raspberry': '#FF006E',
        'blue-violet': '#8338EC',
        'brilliant-azure': '#3A86FF',
      },
    },
  },
  plugins: [],
}
