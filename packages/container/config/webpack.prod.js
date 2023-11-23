
// Import necessary modules
const { merge } = require('webpack-merge');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');

// Import common configuration
const commonConfig = require('./webpack.common');

// Import package.json for dependencies
const packageJson = require('../package.json');

// Get the production domain from the environment variable
const domain = process.env.PRODUCTION_DOMAIN;

// Production configuration
const prodConfig = {
    mode: 'production', // Set the mode to production
    output: {
        filename: '[name].[contenthash].js', // Output filename with content hash for cache busting
        publicPath: '/container/latest/' // Set the public path for the container
    },
    plugins: [
        new ModuleFederation({
            name: 'container', // Set the name of the container
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`, // Define the remote entry for the marketing module
                auth: `auth@${domain}/auth/latest/remoteEntry.js`, // Define the remote entry for the auth module
                dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`, // Define the remote entry for the dashboard module
            },
            shared: packageJson.dependencies // Share dependencies between the container and the remotes
        })
    ]
};

// Merge the common configuration with the production configuration
module.exports = merge(commonConfig, prodConfig);
//
//This code sets up a production configuration for a container using Webpack's Module Federation. It imports the necessary modules, common configuration, and package.json. It then defines the production domain and configuration. The configuration includes setting the mode to production, output filename with content hash, public path, and defining the remote entries for the marketing, auth, and dashboard modules. Finally, it merges the common configuration with the production configuration and exports it..</s>