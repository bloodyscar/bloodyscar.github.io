module.exports = {
  purge: {
    // enabled: true,
    content: ["./**/*.html", "./**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: 'true',
        padding: '1rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
