/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
        'neue': ['Neue Haas Grotesk Display Pro', 'sans-serif'],
      },
    },
	},
	plugins: [],
};
