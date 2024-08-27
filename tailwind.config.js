/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction:{
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.5)",
      }
    },
  },
  plugins: [],
}

