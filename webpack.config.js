const path = require('path');
var webpack = require('webpack');
//var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./src/app.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[{
			test: /\.js$/,
     		loaders: ['babel-loader'],
    		include: __dirname + '/src/',
    		exclude: __dirname + '/node_modules/'
		}]
	}
};
