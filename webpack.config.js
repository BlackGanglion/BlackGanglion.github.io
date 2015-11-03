var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var FixCSSPathPlugin = require('./FixCSSPathPlugin');

module.exports = {
  entry: {
    'bundle-js': './assets/js/main.js',
    'bundle-css': './assets/css/index.scss'
  },

  output: {
    path: './dist',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=10000'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    //new FixCSSPathPlugin()
  ]
};
