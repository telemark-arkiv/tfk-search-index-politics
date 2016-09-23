'use strict'

const seneca = require('seneca')()
const senecaIndex = require('./lib/seneca-index')

seneca.use(senecaIndex)

seneca.on('ready', () => {
  seneca.act('role:index, cmd:delete', (error, msg) => {
    if (error) {
      throw error
    } else {
      seneca.act('role:data, cmd:collect')
    }
  })
})
