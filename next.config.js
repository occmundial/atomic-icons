const production = require('./env/production.json')
const development = require('./env/development.json')

module.exports = {
  reactStrictMode: true,
  env: process.env.NODE_ENV === 'production' ? production : development
}
