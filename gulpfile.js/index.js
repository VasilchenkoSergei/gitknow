/* eslint-disable import/no-extraneous-dependencies */
const { series, parallel } = require('gulp');
const { clean } = require('./clean');
const { scss } = require('./scss');
const { pug } = require('./pug');
// const { twig } = require('./twig');
const { javascript } = require('./javascript');
const { img } = require('./img');
const { fonts } = require('./fonts');
const { static } = require('./static');
const { video } = require('./video');
const { favicons } = require('./favicons');
const { serve } = require('./serve');
const { svgSprite } = require('./svgSprite');
// const config = require('./config');

if (process.env.NODE_ENV === 'production') {
  exports.default = series(
    clean,
    parallel(
      img,
      fonts,
      static,
      svgSprite,
      pug,
      javascript,
      video,
      favicons,
      scss
    )
  );
} else {
  exports.default = series(
    clean,
    parallel(
      img,
      fonts,
      static,
      svgSprite,
      pug,
      javascript,
      video,
      favicons,
      scss
    ),
    serve
  );
}
