'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname + '/public/app',
  entry: {
    app: './config.js',
    vendor: ['angular']
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'app.bundle.js'
  },
  watch: true,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};