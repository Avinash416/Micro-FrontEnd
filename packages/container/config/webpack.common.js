
// Import the HtmlWebpackPlugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Export the configuration object
module.exports = {
    // Define the module rules
    module: {
        rules: [
            // Rule for JavaScript and JSX files
            {
                // Test for .js or .mjs files
                test: /\.m?js$/,
                // Exclude files from the node_modules directory
                exclude: /node_modules/,
                // Use the babel-loader for transpilation
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Define the Babel presets
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        // Define the Babel plugins
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    // Define the plugins
    plugins: [
        // Create an HtmlWebpackPlugin instance
        new HtmlWebpackPlugin({
            // Specify the template file
            template: "./public/index.html",
        }),
    ]
}

//
//This configuration object tells Webpack to use the `babel-loader` for transpiling JavaScript and JSX files. It also specifies the Babel presets and plugins to use.
//
//The `HtmlWebpackPlugin` is used to generate an HTML file that includes the bundled JavaScript. It takes the template file from the `public` directory and injects the bundled JavaScript into it.
//
//The `exclude` option in the rule tells Webpack to exclude JavaScript files from the `node_modules` directory, as these files are usually already transpiled and do not need to be processed by Babel..</s>