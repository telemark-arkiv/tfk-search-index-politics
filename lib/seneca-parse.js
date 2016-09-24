'use strict'

const repackMeeting = require('./repack-meeting')
const repackPolitician = require('./repack-politician')
const repackCommittee = require('./repack-committee')
const repackParty = require('./repack-party')

module.exports = function senecaParse (options) {
  const seneca = this

  seneca.add('role: parse, cmd: repack, type: meetings', (args, callback) => {
    console.log('Parsing meetings')
    const payload = args.payload

    seneca.act('role:counter, cmd:add', {value: payload.length})

    payload.forEach((item) => {
      const meeting = repackMeeting(item)
      seneca.act('role: queue, cmd: push', {payload: meeting})
    })
  })

  seneca.add('role: parse, cmd: repack, type: politicians', (args, callback) => {
    console.log('Parsing politicians')
    const payload = args.payload

    seneca.act('role:counter, cmd:add', {value: payload.length})

    payload.forEach((item) => {
      const politician = repackPolitician(item)
      seneca.act('role: queue, cmd: push', {payload: politician})
    })

    seneca.act('role: queue, cmd: pull')
  })

  seneca.add('role: parse, cmd: repack, type: committees', (args, callback) => {
    console.log('Parsing committees')
    const payload = args.payload

    seneca.act('role:counter, cmd:add', {value: payload.length})

    payload.forEach((item) => {
      const committee = repackCommittee(item)
      seneca.act('role: queue, cmd: push', {payload: committee})
    })
  })

  seneca.add('role: parse, cmd: repack, type: parties', (args, callback) => {
    console.log('Parsing parties')
    const payload = args.payload

    seneca.act('role:counter, cmd:add', {value: payload.length})

    payload.forEach((item) => {
      const party = repackParty(item)
      seneca.act('role: queue, cmd: push', {payload: party})
    })
  })

  return options.tag || 'seneca-parse'
}
