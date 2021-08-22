const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'Dosis': ['Dosis', 'sans-serif'],
      'Lato': ['Lato', 'sans-serif'],
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Montserrat Alternates': ['Montserrat Alternates', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif'],
      'Roboto Condensed': ['Roboto Condensed', 'sans-serif'],
      'Ubuntu': ['Ubuntu', 'sans-serif'],
      'Ubuntu Condensed': ['Ubuntu Condensed', 'sans-serif'],
      'Ubuntu Mono': ['Ubuntu Mono', 'sans-serif'],
    },
    colors : {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: {
        light: "#5eabdb",
        default: "#175e87",
        darkest: "#15181f"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
