const webpack = require('webpack');
const config = require('./webpack.common.config');

config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'BASE_URI': JSON.stringify('http://localhost:3000/')
    }
}));

module.exports = config;
