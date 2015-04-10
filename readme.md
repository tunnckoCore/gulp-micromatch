## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> micromatch as gulp plugin. Filtering vinyl files with glob patterns, regexp or matcher function.  
> micromatch stream.

## Install
```
npm i --save gulp-micromatch
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var gulp = require('gulp');
var micromatch = require('gulp-micromatch');

var opts = {
  dot: true,
  matchBase: true
};

gulp.src(['*.md', '*.js', '*.txt', '*.json'])
  .pipe(micromatch('*.(js|json)', opts))
  .pipe(through2.obj(function(file, enc, next) {
    // a.js
    // b.json
    // c.json
  }));
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/gulp-micromatch
[npmjs-img]: https://img.shields.io/npm/v/gulp-micromatch.svg?style=flat&label=gulp-micromatch

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gulp-micromatch?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/gulp-micromatch.svg?style=flat

[license-url]: https://github.com/tunnckoCore/gulp-micromatch/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/gulp-micromatch
[travis-img]: https://img.shields.io/travis/tunnckoCore/gulp-micromatch.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/gulp-micromatch
[daviddm-img]: https://img.shields.io/david/tunnckoCore/gulp-micromatch.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/gulp-micromatch/graphs/contributors

***

_Proudly generated by [docks(1)](https://github.com/tunnckoCore), April 10, 2015_