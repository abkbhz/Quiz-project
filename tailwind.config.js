/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        primary: {
          purple: '#8739f9', // main color
          sky: '#37b9f1',    // secondary color
          DEFAULT: '#f2f5f5',  // tertiary color
        },
        font: {
          dark: '#565360',    // darker font color
          medium: '#908e9b',  // medium font color
          light: '#e1dfe9',   // lighter font color
        },
      },
      fontSize: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '0.75rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
    },
  },
  plugins: [],
}

