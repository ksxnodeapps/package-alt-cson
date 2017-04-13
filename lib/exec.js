'use strict'
const CSON = require('cson')
const exec = require('package-alt')

module.exports = update => exec({
  entry: {
    ext: '.cson',
    dump: update
      ? x =>
        CSON.stringify(x, undefined, 2)
      : undefined,
    load: x =>
      CSON.parse(x)
  }
})
