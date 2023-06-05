/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      barmenu: '#B9CCD3',
      fond: '#DBEDF3',
      blue: '#0066CC',
      red:"#FF0000",
      btnfond : '#0386D0',
      btnfond2 : '#0037C5',
      transparent: 'transparent',
      gray: colors.zinc
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      }
    }
  },
  plugins: []
}

