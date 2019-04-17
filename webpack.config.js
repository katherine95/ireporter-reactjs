// import path from 'path';
const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'build.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
                {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            
        ]
    },
    devServer: {
        contentBase: '/',
        historyApiFallback: true
    },
    plugins: [
        new HWP({
            template: path.join(__dirname, '/src/index.html')
        })
    ]
}

