const webpack = require('webpack');
const path = require('path');

const sourceScripts = [
  './src/scripts/site.js'
];

const distScriptsPath = path.join(__dirname, 'dist', 'scripts');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: sourceScripts,
  output: {
    path: distScriptsPath,
    filename: 'site-bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        exclude: /\node_modules|dist/,
      }
    ],
    loaders: [
      {
        test: /\.js?$|\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: [ "react" ,"es2015"]
        }
      },
      {
        test: /\.scss$/,
        loaders: [ "style", "css", "sass" ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
}
