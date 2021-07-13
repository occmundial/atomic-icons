const production = require('./env/production.json')
const development = require('./env/development.json')

module.exports = {
  reactStrictMode: true,
  env: process.env.NODE_ENV === 'production' ? production : development,
  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })
    return config
  }
}
