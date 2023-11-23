
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require("./webpack.common");
const packageJson=require('../package.json')

// This is the development configuration for the dashboard app.
// It extends the common configuration and overrides some properties.
const devConfig = {
 mode: "development",
 output: {
    publicPath: 'http://localhost:8083/' 
    // In development, we set the public path to the local server address.
    // This is because the development server serves the files from memory, not from the file system.
 },
 devServer: {
    port: 8083,
    historyApiFallback: {
      index: '/index.html',
    },
    headers:{
      "Access-Control-Allow-Origin":"*"
    }
 },
 plugins: [
    new ModuleFederationPlugin({
        name:'dashboard',
        filename:"remoteEntry.js",
        exposes:{
            './DashboardApp':'./src/bootstrap'
        },
        shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
 ],
}

// Merge the development configuration with the common configuration.
module.exports = merge(commonConfig, devConfig);

//
//In this code, we have a development configuration for the dashboard app. It extends the common configuration and overrides some properties.
//
//The `output.publicPath` property is set to the local server address. This is because the development server serves the files from memory, not from the file system.
//
//The `devServer.port` property is set to 8083, which is the port number for the development server.
//
//The `devServer.historyApiFallback` property is set to redirect all requests to the `index.html` file. This is useful for single-page applications that handle routing on the client side.
//
//The `devServer.headers` property is set to allow cross-origin requests from any origin. This is useful for development purposes when the app is hosted on a different domain than the API server.
//
//The `plugins` array contains the `ModuleFederationPlugin`, which is used to share code between different applications. It also contains the `HtmlWebpackPlugin`, which is used to generate the `index.html` file for the app.
//
//Finally, the `merge` function is used to combine the development configuration with the common configuration. This ensures that all the settings from the common configuration are also applied to the development configuration..</s>