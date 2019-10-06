/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const config = require('./config');
const webpackConfig = require('./webpack.config.js');

// const isDev = process.env.NODE_ENV === 'development';

const javascript = cb => {
  src(config.src.js)
    .pipe(plumber(config.notify))
    .pipe(webpack(webpackConfig))
    .pipe(dest(config.dest.js));

  cb();
};

exports.javascript = javascript;
