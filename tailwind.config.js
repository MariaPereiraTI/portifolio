/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101510",
        night: "#1D2B22",
        forest: "#354F3A",
        olive: "#617A55",
        sage: "#A8B89A",
        bone: "#E8E8DC",
        paper: "#F4F2E8",
        clay: "#55483A",
        primary: {
          light: "#A8B89A",
          DEFAULT: "#617A55",
          dark: "#354F3A",
          pale: "#E8E8DC",
        },
      },
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      keyframes: {
        "status-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "status-pulse": "status-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
