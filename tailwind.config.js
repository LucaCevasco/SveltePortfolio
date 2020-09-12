module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#6A2E35',
        secondary: '#BE8A60',
        accent: '#2E2836',
        accentMuted: '#E1AA7D',
      },
    },
  },
  variants: {},
  plugins: [],
};
