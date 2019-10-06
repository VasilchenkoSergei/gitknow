/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const prettyHtml = require('gulp-pretty-html');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const flatten = require('gulp-flatten');
const config = require('./config');

const { reload } = browserSync;

const compilePug = cb => {
  src(config.src.pug)
    .pipe(plumber(config.notify))
    .pipe(pug())
    .pipe(
      prettyHtml({
        indent_size: 2,
        indent_char: ' ',
        unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br'],
        content_unformatted: []
      })
    )
    .pipe(flatten())
    .pipe(dest(config.dest.pug))
    .pipe(reload({ stream: true }));

  cb();
};

exports.pug = compilePug;
exports.reload = reload;
