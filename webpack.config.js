module.exports = {
	entry: './src/app.js',
	output: {
		filename: './dist/build.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
		],
	},
	watch: true,
};