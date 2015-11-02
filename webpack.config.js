var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'bundle-js': './js/main.js',
    'bundle-css': './css/index.scss'
  },

  output: {
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
    })
  ]
};
