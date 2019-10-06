/* eslint-disable import/no-extraneous-dependencies */
const { series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const config = require('./config');
const { scss } = require('./scss');
const { pug } = require('./pug');
const { twig } = require('./twig');
const { javascript } = require('./javascript');
const { img } = require('./img');
const { fonts } = require('./fonts');
const { favicons } = require('./favicons');
// const { video } = require('./video');
// const { svgSprite } = require('./svgSprite');

const serve = cb => {
  browserSync.init({
    server: 'dist/',
    startPath: 'index.html',
    open: false,
    port: 8080
  });

  watch([config.watch.pug, config.watch.blocks.pug, config.watch.template]).on(
    'change',
    series(pug)
  );

  watch([config.watch.twig, config.watch.blocks.twig, config.watch.template]).on(
    'change',
    series(twig)
  );

  watch([config.watch.scss, config.watch.blocks.scss]).on('change', series(scss));

  watch([config.watch.js, config.watch.blocks.js]).on('change', series(javascript));

  // watch(config.watch.img).on('change', series(img));
  watch(config.watch.img).on('add', series(img));

  // watch(config.watch.video).on('change', series(video, browserSync.reload));
  // watch(config.watch.video).on('add', series(video, browserSync.reload));

  // watch(config.watch.fonts).on('change', series(fonts));
  watch(config.watch.fonts).on('add', series(fonts));

  watch([
    `${config.dest.html}*.html`,
    `${config.dest.css}*.css`,
    `${config.dest.js}*.js`
    // `${config.dest.img}*.{jpg,jpeg,png,svg,webp,gif}`
  ]).on('change', browserSync.reload);

  cb();
};

exports.serve = serve;
