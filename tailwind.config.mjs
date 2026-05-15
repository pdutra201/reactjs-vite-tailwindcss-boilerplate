/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#6B21A8',   
        'accent-orange': '#F97316', 
      },
      fontFamily: {
        Archivo: ['Archivo', 'sans-serif'],
        DelaGothicOne: ['Dela Gothic One', 'sans-serif'],
      },
      dropShadow: {
        navglow: '0 0 6px rgba(249, 115, 22, 0.8)',
      },
    },
  },
  plugins: []
}
