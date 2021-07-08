const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");

const production = require('./env/production.json')
const development = require('./env/development.json')

module.exports = {
  reactStrictMode: true,
  env: process.env.NODE_ENV === 'production' ? production : development,
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "candywrapper",
      library: { type: config.output.libraryTarget, name: "candywrapper" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        // candywrapper2: isServer
        //   ? path.resolve(
        //       __dirname,
        //       "../candy-wrapper-2/.next/server/static/runtime/remoteEntry.js"
        //     )
        //   : "candywrapper2"
      },
      exposes: {
        "./Header": "./components/Header",
        "./Dummy": "./components/Dummy"
      },
      shared: [],
    };

    withModuleFederation(config, options, mfConf);

    config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = "http://localhost:3000/_next/";
    }

    return config;
  }
}
