/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			
		},
		extend: {
			colors: {
				primary: {
          DEFAULT: "hsl(var(--primary))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          600: "hsl(var(--primary-600))",
        },
				background: {
					DEFAULT: "hsl(var(--background))"
				},
				foreground: {
					DEFAULT: "hsl(var(--foreground))"
				}
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
}
