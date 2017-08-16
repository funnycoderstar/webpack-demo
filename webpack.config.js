const webpack = require('webpack');
const path = require('path');
module.exports = {
    // entry: __dirname + '/src/index.js',
    entry: './src/index.js',
    output: {
        // path: __dirname + '/dist',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /.\css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('webpackDemo')
    ]
}