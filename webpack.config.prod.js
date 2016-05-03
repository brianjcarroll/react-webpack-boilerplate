const webpack = require('webpack');
const path = require('path');

const sourceScripts = [
  './src/scripts/site.js'
];

const distScriptsPath = path.join(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: sourceScripts,
  output: {
    path: distScriptsPath,
    filename: 'scripts/site.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$|\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: [ "es2015", "react" ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [ "style", "css", "sass" ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
}
