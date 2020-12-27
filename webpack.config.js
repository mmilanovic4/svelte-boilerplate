const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
	const isDev = env?.dev === true;

	return {
		mode: isDev ? 'development' : 'production',
		watch: isDev,
		entry: {
			app: ['./src/client/app.js']
		},
		resolve: {
			alias: {
				svelte: path.resolve('node_modules', 'svelte'),
				Client: path.resolve(__dirname, 'src', 'client')
			},
			extensions: ['.mjs', '.js', '.svelte'],
			mainFields: ['svelte', 'browser', 'module', 'main'],
		},
		output: {
			path: path.resolve(__dirname, 'dist', 'assets'),
			publicPath: 'assets/',
			filename: '[name].js',
			chunkFilename: '[name].[id].js'
		},
		module: {
			rules: [
				{
					test: /\.(html|svelte)$/,
					exclude: /node_modules/,
					use: 'svelte-loader'
				},
				{
					test: /\.css$/,
					use: [
						isDev ? 'style-loader': MiniCssExtractPlugin.loader,
						'css-loader'
					]
				}
			]
		},
		optimization: {
			minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			}),
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'html'),
						to: path.resolve(__dirname, 'dist')
					},
					{
						from: path.resolve(__dirname, 'static'),
						to: path.resolve(__dirname, 'dist', 'static')
					}
				]
			})
		],
		devtool: isDev ? 'source-map': false
	};
};
