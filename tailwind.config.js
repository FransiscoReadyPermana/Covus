module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-grey': '#494961',
        'purple': '#A5AFED',
        'green': '59C48C',
        'red': '#FA3030',
        'orange': '#FF7B7B',
        'dark-green': '#385964',
        'dark-purple': '#6E7DDF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
