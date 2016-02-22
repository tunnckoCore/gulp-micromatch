/*!
 * gulp-micromatch <https://github.com/tunnckoCore/gulp-micromatch>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var through2 = require('through2')
var matcher = require('is-match')

module.exports = function gulpMicromatch (patterns, options) {
  var isMatch = matcher(patterns, options)

  return through2.obj(function (file, enc, next) {
    if (isMatch(file.path)) {
      this.push(file)
    }
    next()
  })
}
