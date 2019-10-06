/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const config = require('./config');

const static = cb => {
  src(config.src.static)// 
    .pipe(plumber(config.notify))
    // .pipe(uglify())
    .pipe(dest(config.dest.js));
  cb();
};

exports.static = static;
