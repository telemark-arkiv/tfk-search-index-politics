'use strict'

module.exports = function senecaParse (options) {
  const seneca = this

  seneca.add('role: parse, cmd: repack, type: meetings', (args, callback) => {
    console.log('Parsing meetings')
    seneca.act('role:counter, cmd:add', {value:args.payload.length})
  })

  seneca.add('role: parse, cmd: repack, type: politicians', (args, callback) => {
    console.log('Parsing politicians')
    seneca.act('role:counter, cmd:add', {value:args.payload.length})
  })

  seneca.add('role: parse, cmd: repack, type: committees', (args, callback) => {
    console.log('Parsing committees')
    seneca.act('role:counter, cmd:add', {value:args.payload.length})
  })

  seneca.add('role: parse, cmd: repack, type: parties', (args, callback) => {
    console.log('Parsing parties')
    seneca.act('role:counter, cmd:add', {value:args.payload.length})
  })

  return options.tag || 'seneca-data'
}
