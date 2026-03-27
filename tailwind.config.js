/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050712",
        foreground: "#f9fafb",
        card: "#0b1222",
        border: "#1e293b",
        primary: "#6366f1",
        "primary-foreground": "#f8fafc",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
        "gradient-card":
          "linear-gradient(180deg, rgba(15,23,42,0.9) 0%, rgba(2,6,23,0.92) 100%)",
      },
      boxShadow: {
        "soft-lg": "0 20px 50px rgba(15, 23, 42, 0.45)",
      },
    },
  },
  plugins: [],
};

