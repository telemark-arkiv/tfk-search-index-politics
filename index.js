'use strict'

const seneca = require('seneca')()
const senecaIndex = require('./lib/seneca-index')
const senecaData = require('./lib/seneca-data')
const senecaParse = require('./lib/seneca-parse')
const senecaCounter = require('./lib/seneca-counter')
const senecaQueue = require('./lib/seneca-queue')
const senecaGaKill = require('./lib/seneca-ga-kill')

seneca.use(senecaIndex)
seneca.use(senecaData)
seneca.use(senecaParse)
seneca.use(senecaCounter)
seneca.use(senecaQueue)
seneca.use(senecaGaKill)

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
