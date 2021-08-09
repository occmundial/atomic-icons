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
      active: true
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
