'use strict'

module.exports = {
  JWT_KEY: process.env.JWT_KEY || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  SEARCH_SERVICE_URL: process.env.SEARCH_SERVICE_URL || 'https://politics.search.t-fk.no/api',
  SEARCH_SERVICE_INDEX: process.env.SEARCH_SERVICE_INDEX || 'politics',
  SOURCE_URL_POLITICIANS: process.env.SOURCE_URL_POLITICIANS || 'https://politiker-api.t-fk.no',
  SOURCE_URL_OPENGOV: process.env.SOURCE_URL_OPENGOV || 'https://opengov.api.t-fk.no',
  SITE_URL: process.env.SITE_URL || 'https://politikk.t-fk.no'
}
