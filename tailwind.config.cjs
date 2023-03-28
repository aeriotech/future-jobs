const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: '#191A19',
				'dark-green': '#1E5128',
				green: '#4E9F3D',
				'light-green': '#D8E9A8',
				card: '#292929',
			},
		},
		fontFamity: {
			mono: ['Roboto Mono', 'monospace'],
		},
	},

	plugins: [],
};

module.exports = config;
