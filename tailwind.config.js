module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  textColor: theme => theme('colors'),
  textColor: {
    'primary': '#3B82F6',
    'secondary': '#012970',
  },
  theme: {
    extend: {},
    container:{
      center: true,
      padding:'1rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

