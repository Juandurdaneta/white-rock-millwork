import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Warm Charcoal (Sophistication)
        primary: {
          950: "#1a1a1a",
          900: "#262626",
          800: "#333333",
          700: "#404040",
          600: "#525252",
        },
        // Accent - Warm Gold (Luxury)
        accent: {
          500: "#b8965c",
          400: "#c9a86e",
          300: "#d4b98a",
          200: "#e5d4b8",
          100: "#f5efe6",
        },
        // Neutral - Warm Whites & Creams
        neutral: {
          50: "#fdfcfa",
          100: "#f9f7f4",
          200: "#f0ece5",
          300: "#e0d9ce",
          400: "#c4baa8",
          500: "#9a8f7e",
        },
        // Semantic
        success: "#4a7c59",
        error: "#c45c5c",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 6rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.15" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2" }],
        "heading-lg": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.3" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
        xs: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "clamp(5rem, 12vh, 10rem)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(26, 26, 26, 0.3), rgba(26, 26, 26, 0.7))",
      },
    },
  },
  plugins: [],
};
export default config;
