/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      indigo: '#1d096b',
      pink: '#feaa9b',
      white: '#ffffff',
      black: '#000000',
      barmenu:'#B9CCD3',
      fond:'#DBEDF3',
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