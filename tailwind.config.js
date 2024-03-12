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
        'orange': '#FF8D24',
        'green': {
          100: '#00CA14',
          200: '#01C120',
        },
        'red': '#FF0000CC',
        'gray': {
          100: '#D2D2D2',
          200: '#8b8b8b',
          300: '#c3c9e4',
          400: '#6C727F',
          500: '#4D5E82',
          600: '#CDCDCD',
          700: '#00000033',
        },
        'blue': {
          100: '#66EDFF',
          200: '#4EAAFF',
          300: '#6C89FF',
          400: '#7899FF',
        }
      }
    },
  },
  plugins: [],
}
