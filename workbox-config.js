module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{mp3,css,ttf,yml,svg,webp,png,html,js,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};