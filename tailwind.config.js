/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'satoshi': ['Satoshi', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlowsc' : ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}
