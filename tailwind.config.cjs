/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'xs': '0px',
			'sm': '576px',
			'md': '768px',
			'lg': '992px',
			'xl': '1280px',
			'2xl': '1536px'
		  },
	},
	plugins: [],
	darkMode: "class"
}
 