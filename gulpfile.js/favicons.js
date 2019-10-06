/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const favicons = require('gulp-favicons');
// https://github.com/itgalaxy/favicons
const config = require('./config');

const makeFavicons = cb => {
  return (
    src(config.src.favicon)
      .pipe(plumber(config.notify))
      // .pipe(
      //   favicons({
      //     appName: 'Karfidov lab',
      //     appShortName: 'kl',
      //     appDescription: '',
      //     developerName: 'Func',
      //     developerURL: 'https://func.ru/',
      //     background: '#020307',
      //     path: 'favicons/',
      //     url: 'https://karfidovlab.com/',
      //     display: 'standalone',
      //     orientation: 'portrait',
      //     scope: '/',
      //     start_url: '/?homescreen=1',
      //     version: 1.0,
      //     logging: false,
      //     html: 'favicon.html',
      //     pipeHTML: true,
      //     replace: true
      //   })
      // )
      .pipe(dest(config.dest.favicon))
  );
};

exports.favicons = makeFavicons;
