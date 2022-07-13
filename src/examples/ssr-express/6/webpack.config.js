const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development' === process.env.NODE_ENV ? 'development' : 'production',
    entry: [
        'development' === process.env.NODE_ENV ? './src/index.dev.js' : './src/index.prod.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[fullhash:8].js',
        chunkFilename: 'js/[id].[fullhash:8].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public/index.html'),
            minify: false,
            inject: 'body',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/assets'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
    ],

    resolve: {
        extensions: [ '.js', '.jsx', '.scss' ],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,

                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /node_modules/,
                }
            }
        }
    },

    devServer: {
        port: 1024,
        historyApiFallback: true,
    },

    devtool: 'source-map'
};
