/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['serif'],
        sans: [
          'Inter',
          'SF Pro Text',
          'system-ui',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
        ],
        monospace: [`SF Mono`, `ui-monospace`, `Monaco`, 'Monospace'],
      },
      colors: {
        primary: {
          ...colors.blue,
          contrast: '#fff',
        },
        black: {
          50: '#525252',
          100: '#363636',
          200: '#282828',
          300: '#222',
          400: '#121212',
          500: '#0a0a0a',
          600: '#050505',
          700: '#000',
        },
      },
    },
  },
  plugins: [],
}
