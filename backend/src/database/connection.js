const knex = require('knex')
const conf = require('../../knexfile')
const confEnvironment =
  process.env.NODE_ENV === 'test' ? conf.test : conf.development
const connection = knex(confEnvironment)

module.exports = connection
