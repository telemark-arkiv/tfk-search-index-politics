'use strict'

var Wreck = require('wreck')
var generateToken = require('/generate-token')
var config = require('../config/index')
var indexUrl = config.SEARCH_SERVICE_URL + '/' + config.SEARCH_SERVICE_INDEX
var token = generateToken({key: config.JWT_KEY, payload: {system: 'tfk-search-index-politikere'}})
var wreckOptions = {
  json: true,
  headers: {
    Authorization: token
  }
}

module.exports = (callback) => {
  Wreck.delete(indexUrl, wreckOptions, function (error, response, payload) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, payload)
    }
  })
}
