'use strict'

const addIndex = require('./add-index')
const deleteIndex = require('./delete-index')

module.exports = function senecaIndex (options) {
  const seneca = this

  seneca.add('role:index, cmd:add', (args, callback) => {
    const payload = args.payload
    addIndex(payload, (error, data) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, data)
      }
    })
  })

  seneca.add('role:index, cmd:delete', (args, callback) => {
    deleteIndex((error, msg) => {
      if (error) {
        callback(error, null)
      } else {
        callback(null, msg)
      }
    })
  })

  return options.tag || 'seneca-index'
}
