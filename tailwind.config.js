/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F1F5F9',
          100: '#E2E8F0',
          200: '#CBD5E1',
          400: '#64748B',
        },

        rotion: {
          50: '#ebeaed',
          100: '#c1bfc7',
          200: '#a3a0ac',
          300: '#797486',
          400: '#5f596e',
          500: '#37304a',
          600: '#322c43',
          700: '#272235',
          800: '#1e1a29',
          900: '#17141f',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
