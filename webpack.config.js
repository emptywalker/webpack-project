const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/app/main.js', // 唯一入口文件
    output: {
        path: __dirname + '/public', // 打包后文件存放的位置
        filename: 'bundle.js', // 打包后输出的文件名
    },

    devServer: {
        contentBase: "./public", //本地服务器所加载页面的目录
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.BannerPlugin('copyrights is belong to emptywalker')
    ]

}
// __dirname 是node.js中的一个全局变量，指向当前执行脚本所在的目录