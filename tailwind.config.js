module.exports = {
  mode: 'jit',
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        josefin: '"Josefin Sans", sans',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s'
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
