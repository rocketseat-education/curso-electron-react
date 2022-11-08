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
          500: '#5A4B81',
          700: '#252131',
          800: '#191622',
          900: '#15121E',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
