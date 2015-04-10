/**
 * gulp-micromatch <https://github.com/tunnckoCore/gulp-micromatch>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('is-kindof');
var through2 = require('through2');
var micromatch = require('micromatch');

module.exports = function gulpMicromatch(patterns, opts) {
  if (!is.array(patterns) && !is.string(patterns) && !is.function(patterns) && !is.regexp(patterns)) {
    throw new TypeError('gulp-micromatch expects array, string, function or regexp');
  }

  var isMatch = null;

  if (is.array(patterns)) {
    isMatch = function(fp) {
      return micromatch(fp, patterns, opts).length;
    }
  }
  if (is.string(patterns)) {
    isMatch = function(fp) {
      return micromatch.isMatch(fp, patterns, opts);
    }
  }
  if (is.function(patterns) || is.regexp(patterns)) {
    isMatch = micromatch.matcher(patterns, opts)
  }

  return through2.obj(function(file, enc, next) {
    if (isMatch && isMatch(file.path)) {
      this.push(file);
    }
    next();
  });
};
