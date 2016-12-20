var webpack = require('webpack');
var path = require('path');
var libraryName = 'responsive-graph-labels';
var outputFile = libraryName + '.js';

var config = {
  entry: {
    'lib/responsive-graph-labels': './src/responsive-graph-labels.js',
    'spec/compiled/responsive-graph-labels.test': './spec/responsive-graph-labels.test.js'
  },
  devtool: 'source-map',
  output: {
    path: './',
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /(node_modules|spec|lib)/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};

module.exports = config;
