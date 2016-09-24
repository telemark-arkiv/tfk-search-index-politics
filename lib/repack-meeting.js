'use strict'

const config = require('../config/index')

module.exports = (data) => {
  if (!data) {
    throw new Error('Missing required input')
  }

  const json = {
    title: data.boardName,
    type: 'meeting',
    description: `${data.boardName} ${data.date} ${data.year}`,
    url: `${config.SITE_URL}/agenda/${data._id}`,
    data: data
  }

  return json
}
