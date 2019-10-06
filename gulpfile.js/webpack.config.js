/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const config = require('./config');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.NODE_ENV,
  // mode: 'production',
  output: {
    path: config.dest.js,
    filename: 'script.min.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      // '@': path.resolve('src'),
      '@': path.resolve(__dirname, '../src')
    }
  },
  // devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  devtool: false,
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  externals: {
    // jquery: 'jQuery',
    // lodash : {
    //   commonjs: 'lodash',
    //   amd: 'lodash',
    //   root: '_' // indicates global variable
    // }
  },
  optimization: {
    // runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   },
    //   chunks: 'async',
    //   minChunks: 1,
    //   minSize: 30000,
    //   name: true
    // }
  }
};
