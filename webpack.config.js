const webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        port: '2000',
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015', 'react'
                        ]
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('webpackDemo')
    ]
}