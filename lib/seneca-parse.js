'use strict'

module.exports = function senecaParse (options) {
  const seneca = this

  seneca.add('role: parse, cmd: repack, type: meetings', (args, callback) => {
    console.log('Parsing meetings')
  })

  seneca.add('role: parse, cmd: repack, type: politicians', (args, callback) => {
    console.log('Parsing politicians')
  })

  seneca.add('role: parse, cmd: repack, type: committees', (args, callback) => {
    console.log('Parsing committees')
  })

  seneca.add('role: parse, cmd: repack, type: parties', (args, callback) => {
    console.log('Parsing parties')
  })

  return options.tag || 'seneca-data'
}
