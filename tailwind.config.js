/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

const theme = {
  colors: {
    ...colors,
    primary: {
      50: '#E3ECEA',
      100: '#BACFCB',
      200: '#8CAFA8',
      300: '#5E8E85',
      400: '#3C766B',
      500: '#195E51',
      600: '#155347',
      700: '#11483C',
      800: '#0C3C32',
      900: '#083127',
      DEFAULT: '#195E51',
    },
    mint: {
      50: '#DBF2EC',
      100: '#BEE4DC',
      200: '#93D3C5',
      300: '#67C1AD',
      400: '#47B39C',
      500: '#3AA48C',
      600: '#2E957C',
      700: '#21866B',
      800: '#15775B',
      900: '#08684B',
      DEFAULT: '#DBF2EC',
    },
    success: {
      ...colors.green,
      DEFAULT: colors.green[500],
    },
  },
  fontFamily: {
    sans: [
      'Goldplay',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Open Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    accent: [
      'Dreaming Out Loud Script',
      'Dreaming Outloud Script Slanted PRO',
      'Dreaming Outloud Script Slanted',
      'Goldplay',
      '-apple-system',
      'sans-serif',
    ],
    caps: [
      'Dreaming Out Loud All Caps Slanted',
      'Dreaming Outloud AllCaps Slanted',
      'Goldplay',
      '-apple-system',
      'sans-serif',
    ],
  },
  extend: {
    spacing: {
      unset: 'unset',
      72: '18rem',
      84: '21rem',
      96: '24rem',
    },
    borderColor: {
      DEFAULT: '#eeeef0',
    },
  },
  container: {
    padding: {
      DEFAULT: '1rem',
      md: '2rem',
    },
  },
};

const variants = {
  borderWidth: ['responsive', 'first'],
  margin: ['responsive', 'last'],
};

const plugins = [];

const purge = ['./src/**/*.tsx'];

module.exports = {
  purge,
  theme,
  variants,
  plugins,
};
