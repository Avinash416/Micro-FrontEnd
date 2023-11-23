

const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

// Development configuration
const devConfig = {
 mode: "development",
 output: {
    publicPath: 'http://localhost:8080/' // Public path for development server
 },
 devServer: {
    port: 8080, // Port for development server
    historyApiFallback: {
      index: '/index.html', // Fallback for HTML5 history API
    },
 },
 plugins: [
    new ModuleFederationPlugin({
      name: "container", // Name of the container
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js', // Remote entry for marketing module
        auth: 'auth@http://localhost:8082/remoteEntry.js', // Remote entry for auth module
        dashboard: 'dashboard@http://localhost:8083/remoteEntry.js', // Remote entry for dashboard module
      },
      shared: packageJson.dependencies // Shared dependencies between modules
    }),
 ],
};

module.exports = merge(commonConfig, devConfig);
//
//In this code, we have a development configuration that extends the common configuration. The development configuration includes a development server, module federation, and shared dependencies.
//
//The development server is configured to run on port 8080 and uses HTML5 history API fallback.
//
//The module federation plugin is used to define the container and its remote dependencies. The remote dependencies are other micro-frontends that will be loaded dynamically.
//
//The shared dependencies are specified in the package.json file. These dependencies will be shared between the container and its remote dependencies.
//
//The `merge` function is used to combine the common configuration with the development configuration. This ensures that the common configuration is applied to the development configuration as well..</s>