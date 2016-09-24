'use strict'

const config = require('../config/index')
const buildDescription = require('./build-description-politician')

module.exports = (data) => {
  if (!data) {
    throw new Error('Missing required input')
  }

  const json = {
    title: data.name,
    type: 'politician',
    description: buildDescription(data),
    url: `${config.SITE_URL}/politiker/${data.recno}`,
    data: data
  }

  return json
}
