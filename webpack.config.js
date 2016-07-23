var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUNNY_2D = path.resolve(__dirname, 'node_modules/bunny.2d/dist/bunny.2d.js');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?http://localhost:3000&reload=true',
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
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new CopyWebpackPlugin([
      { context: path.resolve(__dirname, './media/'), from: '**/*' },
      // { from: path.resolve(__dirname, 'node_modules/bunny.2d/dist/bunny.2d.js'), to: 'js/bunny.2d.js' }
    ])
  ],
  devServer: {
    port: 3000,
    headers: { 'Access-Control-Allow-Origin': '*' },
    noInfo: true,
    hot: true,
    contentBase: path.resolve(__dirname, './build')
  }
};
