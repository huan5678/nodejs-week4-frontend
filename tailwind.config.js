const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
  theme: {
    screens: {
      sm: '576px',

      md: '768px',

      lg: '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: '0.9375rem',
      },
      fontFamily: {
        sans: ['Noto Sans TC', ...fontFamily.sans],
        logo: ['Paytone One'],
        mono: ['Azeret Mono', ...fontFamily.mono],
        num: '"Baloo Da 2, cursive"',
      },
      colors: {
        primary: {
          DEFAULT: '#03438D',
        },
        black: {
          DEFAULT: '#000400',
        },
        gray: {
          DEFAULT: '#EFECE7',
          base: '#9B9893',
          light: '#00040029',
        },
        secondary: {
          DEFAULT: '#EEC32A',
        },
        info: {
          DEFAULT: '#E2EDFA',
          dark: '#A8B0B9',
        },
        danger: {
          DEFAULT: '#F57375',
        },
      },
      boxShadow: {
        side: '-2px 2px 0px #000400',
        bottom: '0px 3px 0px #000400',
        light: '-8px 8px 0px #00040029',
        paper: '6px 6px 0px #FFF, 6px 6px 0px 2px #000400',
      },
    },
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '351px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '869px',
          },
        },
      });
    },
  ],
};
