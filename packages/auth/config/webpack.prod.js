
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

// Production configuration
const prodConfig = {
    mode: "production",
    output: {
        filename: '[name][contenthash].js', // Generate unique hash for each build
        publicPath: '/auth/latest/' // Public path for the assets
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth', // Unique name for the application
            filename: 'remoteEntry.js', // Name of the remote entry file
            exposes: {
                './AuthApp': './src/bootstrap' // Expose the bootstrap module for remote consumption
            },
            shared: packageJson.dependencies // Shared dependencies between the host and the remote
        })
    ]
};

// Merge the common configuration with the production configuration
module.exports = merge(commonConfig, prodConfig);
//
//In this code, we have a production configuration (`prodConfig`) that extends the common configuration (`commonConfig`). The production configuration includes the following:
//
//- Setting the `mode` to "production".
//- Configuring the `output` to generate unique hashes for each build and set the public path for the assets.
//- Adding the `ModuleFederationPlugin` to configure the remote application.
//
//The `ModuleFederationPlugin` is configured with the following options:
//
//- `name`: A unique name for the application.
//- `filename`: The name of the remote entry file.
//- `exposes`: The module that should be exposed for remote consumption.
//- `shared`: The shared dependencies between the host and the remote.
//
//Finally, we merge the common configuration with the production configuration using the `merge` function from `webpack-merge`..</s>