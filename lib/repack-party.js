'use strict'

const config = require('../config/index')

module.exports = (data) => {
  if (!data) {
    throw new Error('Missing required input')
  }

  const json = {
    title: data.name,
    type: 'party',
    description: data.name,
    url: `${config.SITE_URL}/partier/${data._id}`,
    data: data
  }

  return json
}
