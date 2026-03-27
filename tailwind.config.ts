import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        foreground: "#0F172A",
        primary: "#FF6A3D",
        accent: "#2563EB",
        muted: "#64748B",
        card: "#FFFFFF",
        border: "#E2E8F0",
        "primary-foreground": "#FFFFFF"
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #FF6A3D 0%, #FF8A5C 100%)",
        "gradient-card":
          "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)"
      },
      boxShadow: {
        "soft-lg": "0 20px 45px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

