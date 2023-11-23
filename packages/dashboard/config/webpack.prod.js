
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

// Production configuration
const prodConfig = {
    mode: "production",
    output: {
        filename: '[name][contenthash].js',
        publicPath: '/dashboard/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardApp': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
};

// Merge common and production configurations
module.exports = merge(commonConfig, prodConfig);
//
//In this code, we have a production configuration (`prodConfig`) that sets the `mode` to `"production"` and configures the `output` to include a `[contenthash]` in the filename. This ensures that the browser will cache the files correctly.
//
//The `ModuleFederationPlugin` is used to configure the module federation. It sets the `name` of the federated module, the `filename` of the remote entry file, and the `exposes` object that maps the module's internal path to the exposed path.
//
//The `shared` option specifies the dependencies that should be shared between the host and the remote. In this case, we are sharing all dependencies listed in the `package.json` file.
//
//Finally, we merge the common configuration (`commonConfig`) with the production configuration (`prodConfig`) using the `merge` function from `webpack-merge`. This ensures that all the necessary configurations from the common configuration are included in the production configuration..</s>