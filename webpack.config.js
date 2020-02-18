const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = env => {
	const isProd = (env && env.prod) === true;

	return {
		mode: isProd ? 'production' : 'development',
		watch: !isProd,
		entry: {
			app: ['./src/client/app.js']
		},
		resolve: {
			alias: {
				Client: path.resolve(__dirname, 'src', 'client')
			},
			extensions: ['.mjs', '.js', '.svelte'],
			mainFields: ['svelte', 'browser', 'module', 'main']
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
					test: /\.svelte$/,
					use: {
						loader: 'svelte-loader',
						options: {
							emitCss: true,
							hotReload: true
						}
					}
				},
				{
					test: /\.css$/,
					use: [
						isProd ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader'
					]
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			}),
			new CopyPlugin([
				{
					from: path.resolve(__dirname, 'html'),
					to: path.resolve(__dirname, 'dist')
				},
				{
					from: path.resolve(__dirname, 'static'),
					to: path.resolve(__dirname, 'dist', 'static')
				}
			])
		],
		devtool: isProd ? false : 'source-map'
	};
};
