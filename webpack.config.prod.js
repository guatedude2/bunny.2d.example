var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUNNY_2D = path.resolve(__dirname, 'node_modules/bunny.2d/dist/bunny.2d.js');

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
      'bunny.2d': BUNNY_2D
    }
  },
  module: {
    noParse: [
      BUNNY_2D
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
      { context: path.resolve(__dirname, './media/'), from: '**/*' }
    ])
  ]
};
