'use strict'

const config = require('../config')

module.exports = (data) => {
  if (!data) {
    throw new Error('Missing required input')
  }

  const json = {
    title: data.name,
    type: 'committee',
    description: '',
    url: `${config.SITE_URL}/utvalg/${data._id}`,
    data: data
  }

  return json
}
