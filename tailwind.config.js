/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
      },
    },
    fontFamily: {
      "work-sans": "Work Sans",
    },
    screens: {
      ms: "320px",
      // => @media (min-width: 375px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: "#000000",
      white: "#ffffff",
      "neutral-300": "#D1D5DB",
      "neutral-400": "#9CA3AF",
      "neutral-500": "#6B7280",
      green: "#0CAF60",
      yellow: "#FFEC89",
      grey: "#84868C",
      error: "#E03137",
      success: "#277352",
    },
  },
  plugins: [],
};
