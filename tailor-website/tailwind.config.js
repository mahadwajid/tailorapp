/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        gelica: ["var(--font-gelica)", "serif"],
        sans: ["var(--font-satoshi)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
