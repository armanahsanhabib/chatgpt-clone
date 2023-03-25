/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-900': '#202123',
      'dark-800': '#2b2c2f',
      'dark-700': '#4d4d4f',
      'dark-600': '#343541',
      'dark-500': '#40414f',
      'dark-300': '#3e3f4b',
      'gray-50': '#ececf1',
    },
  },
  plugins: [],
  darkmode: 'class',
}