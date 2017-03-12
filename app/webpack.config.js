const webpack = require('webpack');

module.exports = {
    devtool: 'inline-sourcemap',
    entry: './index.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot-loader',
                    'babel-loader'
                ]
            }, {
                test: /\.css$|\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};