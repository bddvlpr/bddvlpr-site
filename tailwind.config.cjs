/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,ts,svelte}',
		'./node_modules/flowbite-svelte/**/*.{html,js,ts,svelte}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('flowbite/plugin')]
};
