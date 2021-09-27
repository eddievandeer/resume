const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        open: true,
        port: 8888
    },
    configureWebpack: {
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/
            }),
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: /\.(js|css)(\?.*)?$/i,
                threshold: 10240, // 对超过10k的数据进行压缩
                minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                deleteOriginalAssets: false, // 删除原文件
            }),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 5,
            })
        ],
    },
}