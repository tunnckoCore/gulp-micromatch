/*!
 * gulp-micromatch <https://github.com/tunnckoCore/gulp-micromatch>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var through2 = require('through2')
var plugin = require('./index')
var vfs = require('vinyl-fs')

// DRY principle
function micromatch (patterns, opts, callback) {
  var fileCount = 0
  vfs.src(['./*.*', './.*'])
    .pipe(plugin(patterns, opts))
    .pipe(through2.obj(function (file, enc, next) {
      fileCount++
      next()
    }, function onEnd () {
      callback(fileCount)
    }))
}

test('gulp-micromatch:', function () {
  test('should throw TypeError if not array, string, function or regexp given', function (done) {
    function fixture () {
      plugin()
    }
    test.throws(fixture, /expects a string, array, regex, plain object or function/)
    test.throws(fixture, TypeError)
    done()
  })
  test('should work when string pattern given', function (done) {
    micromatch('*.js', {dot: true, matchBase: true}, function _callback (cnt) {
      test(cnt, 2, 'should match `2` when string pattern')
      done()
    })
  })
  test('should work when array of patterns given', function (done) {
    micromatch(['*.js', '*.md'], {dot: true, matchBase: true}, function _callback (cnt) {
      test(cnt, 6, 'should match `6` when array of patterns')
      done()
    })
  })
  test('should work when regexp given', function (done) {
    micromatch(/.*\.md$/, {dot: true, matchBase: true}, function _callback (cnt) {
      test(cnt, 4, 'should match `4` when regexp')
      done()
    })
  })
  test('should work when matcher function given', function (done) {
    micromatch(function (fp) {
      return /.*\.(js|md)$/.test(fp)
    }, {dot: true, matchBase: true}, function _callback (cnt) {
      test(cnt, 6, 'should match `6` when function')
      done()
    })
  })
})
