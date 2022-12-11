const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },

      colors: {
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

      keyframes: {
        slideIn: {
          from: { width: 0 },
          to: { width: 'var(--radix-collapsible-content-width)' },
        },

        slideOut: {
          from: { width: 'var(--radix-collapsible-content-width)' },
          to: { width: 0 },
        },
      },

      animation: {
        slideIn: 'slideIn 0.25s',
        slideOut: 'slideOut 0.25s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),

    plugin(({ addUtilities }) => {
      addUtilities({
        '.region-drag': {
          '-webkit-app-region': 'drag',
        },
        '.region-no-drag': {
          '-webkit-app-region': 'no-drag',
        },
      })
    }),
  ],
}
