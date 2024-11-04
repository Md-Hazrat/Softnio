/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        "custom-62": ["62px", "62px"], // Font size 62px with line height 62px
        "custom-120": ["120px", "130px"], // Font size 120px with line height 130px
      },
      fontWeight: {
        bold: "700",
      },
      boxShadow: {
        "custom-shadow": "0px 7px 16px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
