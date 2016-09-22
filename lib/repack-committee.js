'use strict'

var config = require('../config/index')
var buildDescription = require('./build-description')

module.exports = (data) => {
  if (!data) {
    throw new Error('Missing required input')
  }

  const json = {
    title: data.name,
    type: 'politician',
    description: buildDescription(data),
    url: config.SITE_URL + '/politiker' + data.recno,
    data: {
      mobile: data.mobilePhone,
      mail: data.publicMail,
      committees: data.committees
    }
  }

  return json
}
