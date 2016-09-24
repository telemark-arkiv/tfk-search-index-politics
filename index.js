'use strict'

const seneca = require('seneca')()
const senecaIndex = require('./lib/seneca-index')
const senecaData = require('./lib/seneca-data')
const senecaParse = require('./lib/seneca-parse')

seneca.use(senecaIndex)
seneca.use(senecaData)
seneca.use(senecaParse)

seneca.listen()

seneca.on('ready', () => {
  seneca.act('role:index, cmd:delete', (error, msg) => {
    if (error) {
      throw error
    } else {
      seneca.act('role:data, cmd:collect, type:meetings')
      seneca.act('role:data, cmd:collect, type:politicians')
      seneca.act('role:data, cmd:collect, type:committees')
      seneca.act('role:data, cmd:collect, type:parties')
    }
  })
})
