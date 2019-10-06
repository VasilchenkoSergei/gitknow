/* eslint-disable import/no-extraneous-dependencies */
const del = require('del');
const cache = require('gulp-cache');
const config = require('./config');

const clean = () => {
  cache.clearAll();
  return del(config.output);
};

exports.clean = clean;
