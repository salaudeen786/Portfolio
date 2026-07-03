/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        dark: {
          900: "#0a0a0f",
          800: "#111118",
          700: "#1a1a25",
          600: "#22222f",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(6,182,212,0.3)",
        "glow-lg": "0 0 40px rgba(6,182,212,0.15)",
      },
    },
  },
  plugins: [],
}
