/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'osman': '767px',
        'kucuk': '730px',
        'ekran836': '836px',
        'xl':'1263px'
      }
    },
  },
  plugins: [],
}