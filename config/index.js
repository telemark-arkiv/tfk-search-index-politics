'use strict'

module.exports = {
  JWT_KEY: process.env.JWT_KEY || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  SEARCH_SERVICE_URL: process.env.SEARCH_SERVICE_URL || 'https://search.service.com/api',
  SEARCH_SERVICE_INDEX: process.env.SEARCH_SERVICE_INDEX || 'politics',
  SOURCE_URL_POLITICIANS: process.env.SOURCE_URL_POLITICIANS || 'https://www.yoursite.com/api',
  SOURCE_URL_OPENGOV: process.env.SOURCE_URL_OPENGOV || 'https://www.yoursite.com/api',
  SITE_URL: process.env.SITE_URL || 'https://www.yoursite.com'
}
