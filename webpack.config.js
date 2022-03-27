const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const path = require('path');
const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'css/main-sass.css'
        })
    ],
    watch: true
}

module.exports = config;