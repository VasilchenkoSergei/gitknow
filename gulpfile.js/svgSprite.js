/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const config = require('./config');

const svgSprite = cb => {
  src(config.src.svg)
    .pipe(plumber(config.notify))
    // .pipe(
    //   svgmin(function getOptions(file) {
    //     var prefix = path.basename(file.relative, path.extname(file.relative));
    //     return {
    //       plugins: [
    //         {
    //           cleanupIDs: {
    //             prefix: prefix + '-',
    //             minify: true
    //           }
    //         }
    //       ]
    //     };
    //   })
    // )
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(dest(config.dest.svg));

  cb();
};

exports.svgSprite = svgSprite;
