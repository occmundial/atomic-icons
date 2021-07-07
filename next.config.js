const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

const path = require('path');

module.exports = withFederatedSidecar({
  name: 'candy-wrapper',
  filename: 'static/runtime/remoteEntry.js',
  remotes: {},
  exposes: {
    './Shareable': './components/Shareable'
  },
  shared: ['react', 'react-dom', 'react-jss', '@occmundial/occ-atomic']
});
