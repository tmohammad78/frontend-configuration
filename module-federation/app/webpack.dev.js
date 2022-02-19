const { merge } = require("webpack-merge"); // this is used to be able to merge webpack.common.js with this file
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("./package.json").dependencies;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
      },
      shared: deps,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
