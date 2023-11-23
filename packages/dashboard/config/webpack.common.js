
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // Entry point of the application
    entry: './src/index.js',

    // Output configuration
    output: {
        // Output filename pattern
        filename: '[name].[contenthash].js' 
    },

    // Resolve configuration
    resolve: {
        // File extensions that will be used for resolving modules
        extensions: ['.js','.vue'] 
    },

    // Module configuration
    module: {
        rules: [
            {
                // Match files with specific extensions
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [
                    { loader: 'file-loader'}
                ]
            },
            {
                // Match .vue files
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                // Match .scss and .css files
                test: /\.scss|\.css$/,
                use: ['vue-style-loader','style-loader','css-loader', 'sass-loader']
            },
            {
                // Match .js files
                test: /\.m?js$/,
                exclude: /node_modules/, // Exclude node_modules directory
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Babel presets
                        presets: ['@babel/preset-env'],
                        // Babel plugins
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },

    // Plugins configuration
    plugins: [new VueLoaderPlugin()],
};
//
//This code is a webpack configuration file that bundles a Vue.js application. It includes rules for handling different types of files, such as images, Vue components, CSS, and JavaScript. The configuration also includes plugins for handling Vue components and transforming JavaScript code..</s>