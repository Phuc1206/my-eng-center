/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./sanity/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default tailwindConfig;
