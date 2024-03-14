/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
  ],
  darkMode: 'class',
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        'orange': {
          100: '#FF8D24',
          200: '#FEC538',
          300: '#FFDA80',
        },
        'green': {
          100: '#00CA14',
          200: '#01C120',
        },
        'red': '#FF0000CC',
        'gray': {
          100: '#D2D2D2',
          200: '#8B8B8B',
          300: '#C3C9E4',
          400: '#6C727F',
          500: '#4D5E82',
          600: '#CDCDCD',
          700: '#D2D5DA',
          800: '#00000033',
        },
        'blue': {
          100: '#66EDFF',
          200: '#4EAAFF',
          300: '#6C89FF',
          400: '#7899FF',
          500: '#495EEE'
        }
      }
    },
  },
  plugins: [],
}