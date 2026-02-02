/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        'brutal-yellow': '#FFED4E',
        'brutal-pink': '#FF6AC2',
        'brutal-blue': '#00B4FF',
        'brutal-green': '#39FF14',
        'brutal-red': '#FF3864',
        'brutal-purple': '#B800FF',
      }
    },
  },
  plugins: [],
}