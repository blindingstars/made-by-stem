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
    pistachio: {
      50: '#e5f2db',
      100: '#d5ebc5',
      200: '#bedba9',
      300: '#a8cf8d',
      400: '#95c473',
      500: '#7cab5a',
      600: '#6d9e4a',
      700: '#5f933c',
      800: '#578b36',
      900: '#4c802e',
      DEFAULT: '#e5f2db',
    },
    butter: {
      50: '#f7eec6',
      100: '#f3e5a6',
      200: '#eeda80',
      300: '#e3cc63',
      400: '#dcbf42',
      500: '#d6b31c',
      600: '#cfa70e',
      700: '#c69c06',
      800: '#bd8f00',
      900: '#af7e00',
      DEFAULT: '#f7eec6',
    },
    peach: {
      50: '#fddfda',
      100: '#feccc4',
      200: '#fbbaaf',
      300: '#f0a496',
      400: '#e48e81',
      500: '#dd7868',
      600: '#d26553',
      700: '#c65849',
      800: '#ae4a3c',
      900: '#9b3f33',
      DEFAULT: '#fddfda',
    },
    grape: {
      50: '#e8cbe3',
      100: '#dcb4d5',
      200: '#d5a1cd',
      300: '#c98ebe',
      400: '#bc78b1',
      500: '#b069a3',
      600: '#a75a9a',
      700: '#964a88',
      800: '#8a3b7b',
      900: '#7c306c',
      DEFAULT: '#e8cbe3',
    },
    blueberry: {
      50: '#cddef7',
      100: '#b3caec',
      200: '#99b6e0',
      300: '#7fa2d5',
      400: '#658ec9',
      500: '#587db3',
      600: '#4a699a',
      700: '#3b5888',
      800: '#2f4b79',
      900: '#263c65',
      DEFAULT: '#cddef7',
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
    zIndex: {
      '-1': '-1',
    },
    lineHeight: {
      'extra-tight': '0.7',
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
