'use strict'

var Wreck = require('wreck')
var generateToken = require('/generate-token')
var config = require('../config/index')
var token = generateToken({key: config.JWT_KEY, payload: {system: 'tfk-search-index-politics'}})
var wreckOptions = {
  json: true,
  headers: {
    Authorization: token
  }
}

module.exports = (payload, callback) => {
  if (!payload) {
    return callback(new Error('Missing required input: payload'), null)
  }

  const indexUrl = config.SEARCH_SERVICE_URL + '/' + config.SEARCH_SERVICE_INDEX + '/' + payload.type
  wreckOptions.payload = JSON.stringify(payload)

  Wreck.post(indexUrl, wreckOptions, (error, response, payload) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, payload)
    }
  })
}
