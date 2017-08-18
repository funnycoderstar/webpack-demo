const webpack = require('webpack');
const HtmlWebpackPlugin = require('Html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/build',
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
                },
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('webpackDemo'),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html' // new 一个插件的实例，并传入相关的参数
        })
    ]
}