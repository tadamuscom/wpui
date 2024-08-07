const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	plugins: [
		new CaseSensitivePathsPlugin(),
		new CleanWebpackPlugin(),
		new WebpackAssetsManifest({
			output: path.resolve(process.cwd(), 'public/lib/manifest.json'),
			publicPath: true,
			writeToDisk: true,
		}),
		new MiniCSSExtractPlugin({ filename: '[name]-[chunkhash].css' }),
	],
	module: {
		rules: [
			{
				test: /\.js$|jsx/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: 'defaults' }],
							['@babel/preset-react', { targets: 'defaults' }],
						],
					},
				},
			},
			{
				test: /\.(sass|less|css)$/,
				use: [
					MiniCSSExtractPlugin.loader,
					'css-loader',
					'postcss-loader', // Add this line
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.css', '.woff', '.ttf', '.eot', '.svg'],
	},
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'index.js',
	},
};
