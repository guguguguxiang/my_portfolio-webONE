/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #22d3ee 0%, #6366f1 50%, #ec4899 100%)",
      },
    },
  },
  plugins: [],
};

