'use strict'
const {join} = require('path')
const {readFileSync} = require('fs')
const {exit} = require('process')
const jtry = require('just-try')
const {error} = global.console

const help = () =>
  error(readFileSync(join(__dirname, 'help.txt'), 'utf8'))

const endhelp = () => {
  help()
  exit(0)
}

module.exports = {
  help,
  endhelp
}
