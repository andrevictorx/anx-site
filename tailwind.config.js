/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
  extend: {
    colors: {
      anx: {
        dark: "#0A2A43",
        blue: "#0F4C75",
        light: "#1BC6E8",
      },
    },
  },
},
  plugins: [],
}

