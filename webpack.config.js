const path = require('path');
const webpack = require('webpack');

module.exports = [{
        name: 'development',
        entry: './src/index.js',
        mode: 'development',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'event-bus.js',
            libraryTarget: 'window'
        },
        optimization: {
            minimize: false
        }
    },{
        name: 'production',
        entry: './src/index.js',
        mode: 'production',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'event-bus.min.js',
            libraryTarget: 'window'
        }
}];