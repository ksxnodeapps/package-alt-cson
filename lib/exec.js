'use strict'
const {load, dump} = require('js-yaml')
const exec = require('package-alt')

module.exports = update => exec({
  entry: {
    ext: '.yaml',
    dump: update ? dump : undefined,
    load
  }
})
