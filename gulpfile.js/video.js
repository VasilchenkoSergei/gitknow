/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');

const video = cb => {
  src(config.src.video)
    .pipe(plumber(config.notify))
    .pipe(dest(config.dest.video));
  cb();
};

exports.video = video;
