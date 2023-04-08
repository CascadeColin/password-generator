/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono", "monospace"],
        bebas: ['Bebas Neue', "cursive"]
      },
      color: {
        "dark": "#313131"
      }
    },
  },
  plugins: [],
};
