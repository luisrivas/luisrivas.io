/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      desktop: "1248px"
    },
    colors: {
      black: "rgb(33, 33, 33)",
      blue: "rgb(57, 146, 255)",
      gray: "rgb(72, 72, 72)",
      white: "rgb(249, 249, 249)"
    },
    fontFamily: {
      monospace: 'Inconsolata, monospace'
    }
  },
  plugins: [],
}
