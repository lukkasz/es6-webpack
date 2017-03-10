const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'client', 'js', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'public', 'assets', 'js'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client', 'js')
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      client: 'client'
    },
    extensions: ['', '.js']
  },
  devtool: 'cheap-module-eval-source-map'
};
