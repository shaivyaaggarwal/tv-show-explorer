const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'static');

const webpackConfig = {
    devServer: {
        port: 3000,
        contentBase: BUILD_DIR,
        hot: isDev(),
        inline: isDev()

    },
    entry: [
        "./src/index.js"
    ],
    module: {
        preLoaders: filter([
            ifDev({
                test: /\.js?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            })
        ]),
        loaders: [
            { 
                test: /\.scss/, 
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract('style', 'css!cssnext')
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['ng-annotate','babel']
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: filter([
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            debug: isDev()
        }),
        new ngAnnotatePlugin({add: true}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': process.env.NODE_ENV ? `"${process.env.NODE_ENV}"` : null
        }),
        ifDev(new webpack.HotModuleReplacementPlugin())
    ])
};

function isDev() {
    return process.env.NODE_ENV !== 'production';
}

function ifDev(options) {
    return isDev() ? options : undefined;
}

function filter(plugins) {
    // filter undefined plugins (e.g. which are not for production)
    return plugins.filter(function (plugin) {
        return !!plugin;
    });
}

module.exports = webpackConfig;