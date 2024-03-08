/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      light_black: '#1c1c1e',
      white: '#f3f3f3',
      black: '#19191b',
      blue: '#5179ff',
      para_text: '#565657',
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
