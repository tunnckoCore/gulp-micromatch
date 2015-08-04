# [gulp-micromatch][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Filter [vinyl files](https://github.com/wearefractal/vinyl) with [glob](https://github.com/isaacs/node-glob) patterns, string, regexp, array, object or matcher function. [micromatch](https://github.com/jonschlinkert/micromatch) stream.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i gulp-micromatch --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var gulp = require('gulp')
var micromatch = require('gulp-micromatch')

// options to pass to `micromatch`
var opts = {
  dot: true,
  matchBase: true
}

gulp.src(['*.md', '*.js', '*.txt', '*.json'])
  .pipe(micromatch('*.(js|json)', opts))
  .pipe(through2.obj(function(file, enc, next) {
    // a.js
    // b.json
    // c.json
  }))
```


## Related
- [anymatch](https://github.com/es128/anymatch): Matches strings against configurable strings, globs, regular expressions, and/or functions
- [composer](https://github.com/jonschlinkert/composer): Boilerplate for creating a node.js application based on Template, vinyl and orchestrator. This consists of… [more](https://github.com/jonschlinkert/composer)
- [dush](https://github.com/tunnckocore/dush): :clap: Minimalist 1.5kb event delegation for the browser (IE8+) and nodejs.
- [generate](https://github.com/generate/generate): Project generator, for node.js.
- [is-match](https://github.com/jonschlinkert/is-match): Create a matching function from a glob pattern, regex, string, array, object or function.
- [jstransformer](https://github.com/jstransformers/jstransformer): Normalize the API of any jstransformer
- [micromatch](https://github.com/jonschlinkert/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. Just… [more](https://github.com/jonschlinkert/micromatch)
- [octet](https://github.com/tunnckocore/octet): :watermelon: 1kb template engine for the browser and nodejs. Support helpers, partials and more.
- [snapdragon](https://github.com/jonschlinkert/snapdragon): snapdragon is an extremely pluggable, powerful and easy-to-use parser-renderer factory.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/gulp-micromatch/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/gulp-micromatch
[npmjs-img]: https://img.shields.io/npm/v/gulp-micromatch.svg?label=gulp-micromatch

[license-url]: https://github.com/tunnckoCore/gulp-micromatch/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/gulp-micromatch
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/gulp-micromatch.svg

[travis-url]: https://travis-ci.org/tunnckoCore/gulp-micromatch
[travis-img]: https://img.shields.io/travis/tunnckoCore/gulp-micromatch.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/gulp-micromatch
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/gulp-micromatch.svg

[david-url]: https://david-dm.org/tunnckoCore/gulp-micromatch
[david-img]: https://img.shields.io/david/tunnckoCore/gulp-micromatch.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg