const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				include: [path.resolve(__dirname, 'src')],
				use: 'ts-loader'
			}
		]
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	devtool: 'eval-source-map',

	output: {
		publicPath: 'dist',
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
