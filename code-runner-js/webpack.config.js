const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(environment, options) {
    const env = process.env.NODE_ENV || 'development';
    const isProduction = env === 'production';

    return {
        entry: './src/client/app.js',
        output: {
            path: path.resolve(__dirname, 'dist/public'),
            filename: 'bundle.js',
            publicPath: '/public/'
        },
        devtool: isProduction ? 'none' : 'source-map',
        mode: env,
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Competition',
                hash: true,
                template: './src/client/index.html'
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "style.css"
              })
        ],
        watch: true
    };
}
