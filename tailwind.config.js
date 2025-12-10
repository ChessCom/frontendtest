/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chess-primary': '#69923e',
        'chess-primary-dark': '#4e7837',
        'chess-bg': '#ffffff',
        'chess-text': '#2c2b29',
        'chess-gray': '#4b4847',
        'board-light': '#EBECD0',
        'board-dark': '#739552',
        'board-highlight': '#ff6b35',
        'board-border': '#8b7355',
      }
    },
  },
  plugins: [],
}