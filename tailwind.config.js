/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#263342",
          "text-primary": "#FFF",
          "inactive": "#909498"
        },
        light: {
          background: "#FFF",
          "text-primary": "#263342",
          "inactive": "#909498"
        }
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'fira': ['Fira Code', 'monospace'],
    },
  },
  plugins: []
}