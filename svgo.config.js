const { extendDefaultPlugins } = require('svgo')

module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true
  },
  plugins: extendDefaultPlugins([
    {
      name: 'prefixIds',
      active: true,
      params: {
        prefix: 'atomic'
      }
    },
    {
      name: 'cleanupIDs',
      active: false
    },
    {
      name: 'removeUselessDefs',
      active: false
    }
  ])
}
