// @flow

const path = require('path');
const merge = require('webpack-merge');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	output: {
		path: path.resolve(__dirname, 'dist/client')
    },
	plugins: [
		new FaviconsWebpackPlugin('./assets/logo.png')
	]
});
