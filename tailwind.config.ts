import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', 'sans-serif'],
				serif: ['Lusitana', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
} satisfies Config
