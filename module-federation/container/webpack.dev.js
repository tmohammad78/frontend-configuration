const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("./package.json").dependencies;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        auth: "auth@http://localhost:8081/remoteEntry.js",
        app: "app@http://localhost:8082/remoteEntry.js",
        // checkout: "checkout@http://localhost:8083/remoteEntry.js",
      },
      shared: deps,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
