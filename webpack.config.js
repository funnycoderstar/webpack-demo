const webpack = require('webpack');
// const path = require('path');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/index.js',
    // entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        // path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        port: '2000',
        inline: true//实时刷新
    } 
    module: {
        loaders: [
            { test: /.\css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('webpackDemo')
    ]
}