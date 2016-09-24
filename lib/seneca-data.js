'use strict'

const Wreck = require('wreck')
const config = require('../config')
const wreckOptions = {
  json: true
}

module.exports = function senecaData (options) {
  const seneca = this

  seneca.add('role: data, cmd: collect, type: meetings', (args, callback) => {
    const meetingsUrl = `${config.SOURCE_URL_OPENGOV}/meetings`
    console.log('Collecting meetings')
    Wreck.get(meetingsUrl, wreckOptions, (error, response, payload) => {
      if (error) {
        callback(error, null)
      } else {
        seneca.act('role:parse, cmd:repack, type: meetings', {payload: payload})
      }
    })
  })

  seneca.add('role: data, cmd: collect, type: politicians', (args, callback) => {
    const politiciansUrl = `${config.SOURCE_URL_POLITICIANS}/politicians`
    console.log('Collecting politicians')
    Wreck.get(politiciansUrl, wreckOptions, (error, response, payload) => {
      if (error) {
        callback(error, null)
      } else {
        seneca.act('role:parse, cmd:repack, type: politicians', {payload: payload})
      }
    })
  })

  seneca.add('role: data, cmd: collect, type: committees', (args, callback) => {
    const committeesUrl = `${config.SOURCE_URL_POLITICIANS}/committees`
    console.log('Collecting committees')
    Wreck.get(committeesUrl, wreckOptions, (error, response, payload) => {
      if (error) {
        callback(error, null)
      } else {
        seneca.act('role:parse, cmd:repack, type: committees', {payload: payload})
      }
    })
  })

  seneca.add('role: data, cmd: collect, type: parties', (args, callback) => {
    const partiesUrl = `${config.SOURCE_URL_POLITICIANS}/parties`
    console.log('Collecting parties')
    Wreck.get(partiesUrl, wreckOptions, (error, response, payload) => {
      if (error) {
        callback(error, null)
      } else {
        seneca.act('role:parse, cmd:repack, type: parties', {payload: payload})
      }
    })
  })

  return options.tag || 'seneca-data'
}
