import type { Config } from "tailwindcss";

export default {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)', 'ui-sans-serif', 'system-ui'],
      },
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [],
} satisfies Config;
