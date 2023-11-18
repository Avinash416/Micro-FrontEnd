const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require("./webpack.common");
const packageJson=require('../package.json')
const devConfig = {
  mode: "development",
  output:{
    publicPath: 'http://localhost:8082/' 
    // we have set this in auth app beacuse we are doing nested roiuting like auth/signin before it wasnt like that 
    // so to make this work we need to give exact public path for finding the main.js file with that file the browser loads all the content
    // by writing this path we rae saying that use this exact path in developement
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
};
module.exports = merge(commonConfig, devConfig);
