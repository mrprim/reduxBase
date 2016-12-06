const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'static');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: path.resolve(APP_DIR,'index'),
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.less$/,
            loaders: ["style", "css", "less"]
        }, {
            test: /\.json?/,
            loader: 'json'
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            include: APP_DIR
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    externals: [{
        "window": "window"
    }],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
