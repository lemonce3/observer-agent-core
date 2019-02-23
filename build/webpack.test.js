
const path = require('path');
const webpackBase= require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBase, {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		bundle: [
			'js-polyfills/typedarray',
			path.resolve('test/index.js'),
		]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		port: config.dev.port,
		host: config.dev.host,
		hot: false,
		inline: false
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './template/index.html'),
			inject: 'head'
		})
	],
	node: {
		Buffer: true,
	}
});