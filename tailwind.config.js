/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#263342",
          "text-primary": "#FFF"
        },
        light: {
          background: "#FFF",
          "text-primary": "#FFF"
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