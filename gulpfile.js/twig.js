/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const prettyHtml = require('gulp-pretty-html');
const twig = require('gulp-twig');
const config = require('./config');

const compileTwig = cb => {
  src(config.src.twig)
    .pipe(plumber(config.notify))
    .pipe(twig())
    .pipe(
      prettyHtml({
        indent_size: 2,
        indent_char: ' ',
        unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br'],
        content_unformatted: []
      })
    )
    .pipe(dest(config.dest.twig));

  cb();
};

exports.twig = compileTwig;
