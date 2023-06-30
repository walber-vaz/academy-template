/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      headline: ["Bebas Neue", "sans-serif"],
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}