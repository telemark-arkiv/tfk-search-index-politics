'use strict'

var counter = 0

module.exports = function senecaCounter (options) {
  const seneca = this

  seneca.add('role: counter, cmd:add', (args, callback) => {
    const value = parseInt(args.value || 0, 10)
    counter += value
    console.log(counter)
  })

  seneca.add('role: counter, cmd:subtract', (args, callback) => {
    const value = parseInt(args.value || 0, 10)
    counter -= value
    console.log(counter)
  })

  return options.tag || 'seneca-counter'
}
