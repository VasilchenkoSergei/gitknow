/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');

const fonts = cb => {
  src(config.src.fonts)
    .pipe(plumber(config.notify))
    .pipe(dest(config.dest.fonts));

  cb();
};

exports.fonts = fonts;
