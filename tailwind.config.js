/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        publica: ["Publica"],
        yuki: ["Yukita"]
      },
      colors: {
        white: "#ffffff",
        dark: "#0F091C",
        primary: "#CAFFD0",
        secondary: "#B3B7EE",
        accent: "#A5F0E2"
      }
    },
  },
  plugins: [],
}

