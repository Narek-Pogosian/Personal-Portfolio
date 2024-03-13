const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary-500))",
          400: "hsl(var(--primary-400))",
          600: "hsl(var(--primary-600))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        element: {
          DEFAULT: "hsl(var(--element))",
          foreground: "hsl(var(--element-foreground))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
        },
        scrollbar: {
          DEFAULT: "hsl(var(--scrollbar))",
        },
      },
      animation: {
        shine: "shine 1.5s infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
