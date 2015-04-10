/**
 * gulp-micromatch <https://github.com/tunnckoCore/gulp-micromatch>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var through2 = require('through2');
var plugin = require('./index');
var gulp = require('gulp');

// DRY principle
function micromatch(patterns, opts, callback) {
  var fileCount = 0;
  gulp.src(['./*.*', './.*'])
    .pipe(plugin(patterns, opts))
    .pipe(through2.obj(function(file, enc, next) {
      fileCount++
      next();
    }, function onEnd() {
      callback(fileCount);
    }));
}

test('gulp-micromatch:', function() {
  test('should throw TypeError if not array, string, function or regexp given', function(done) {
    function fixture() {
      plugin();
    }
    test.throws(fixture, /expects array, string, function or regexp/);
    test.throws(fixture, TypeError);
    done();
  });
  test('should work when string pattern given', function(done) {
    micromatch('*.js', {dot: true, matchBase: true}, function _callback(matches) {
      test(matches, 2, 'should match `2` when string pattern');
      done();
    })
  });
  test('should work when array of patterns given', function(done) {
    micromatch(['*.js', '*.md'], {dot: true, matchBase: true}, function _callback(matches) {
      test(matches, 5, 'should match `5` when array of patterns');
      done();
    });
  });
  test('should work when regexp given', function(done) {
    micromatch(/.*\.md$/, {dot: true, matchBase: true}, function _callback(matches) {
      test(matches, 3, 'should match `3` when regexp');
      done();
    });
  });
  test('should work when matcher function given', function(done) {
    micromatch(function(fp) {
      return /.*\.(js|md)$/.test(fp);
    }, {dot: true, matchBase: true}, function _callback(matches) {
      test(matches, 5, 'should match `5` when function');
      done();
    });
  });
});
