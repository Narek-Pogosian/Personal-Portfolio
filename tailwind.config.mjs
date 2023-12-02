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
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary-500))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          600: "hsl(var(--primary-600))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
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
  plugins: [],
};
