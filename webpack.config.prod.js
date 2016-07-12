var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
	  './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
		filename: 'js/app.bundle.js'
  },
  resolve: {
    alias: {
      'pixi': path.resolve(__dirname, 'node_modules/pixi.js/bin/pixi.min.js')
    }
  },
  module: {
    noParse: [
      /node_modules\/pixi\.js\//,
    ],
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
			test: /\.json$/,
			loader: 'json'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false} }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new CopyWebpackPlugin([
      { context: './app/media/', from: '**/*' }
    ])
  ]
};
