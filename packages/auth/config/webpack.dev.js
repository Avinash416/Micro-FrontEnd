
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require("./webpack.common");
const packageJson=require('../package.json')

// The development configuration
const devConfig = {
 mode: "development",
 output: {
    publicPath: 'http://localhost:8082/' 
    // This is the public path for the development server.
    // It is used to locate the main.js file and load all the content.
 },
 devServer: {
    port: 8082,
    historyApiFallback: {
      index: '/index.html',
    },
 },
 plugins: [
    new ModuleFederationPlugin({
        name:'auth',
        filename:"remoteEntry.js",
        exposes:{
            './AuthApp':'./src/bootstrap'
        },
        shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
 ],
}

// Merge the common configuration with the development configuration
module.exports = merge(commonConfig, devConfig);

//
//In this code, we have a development configuration that extends the common configuration. The development configuration includes a public path for the development server, a port number for the development server, and a history API fallback configuration.
//
//The development configuration also includes the Module Federation Plugin, which allows us to share dependencies between different applications. In this case, we are exposing the AuthApp module from the current application.
//
//Finally, we have the HtmlWebpackPlugin, which generates an HTML file that includes all the generated bundles.
//
//The merged configuration is then exported for use in the development environment..</s>