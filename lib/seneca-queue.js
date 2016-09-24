'use strict'

var queue = []

module.exports = function senecaQueue (options) {

  const seneca = this

  seneca.add('role: queue, cmd: push', (args, callback) => {
    const item = args.payload

    queue.push(item)
  })

  seneca.add('role: queue, cmd: pull', () => {
    if (queue.length > 0) {
      const item = queue.pop()
      seneca.act('role: index, cmd: add', {payload: item}, (error, data) => {
        if (error) {
          console.error(data)
        }
        seneca.act('role: counter, cmd: subtract')
        if (queue.length > 0) {
          seneca.act('role: queue, cmd: pull')
        }
      })
    }
  })

  return options.tag || 'seneca-queue'
}
