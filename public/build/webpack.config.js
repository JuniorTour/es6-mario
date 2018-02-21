const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
/*
* TODO-List
*
* Better Development, Better Compatibility, Better Perfomance
*
* 1. Copy assets file --- CopyWebpackPlugin
* 2. Compress/Optimise assets file --- ImageminPlugin
* 3. Dev Server --- Webpack Dev Server
* 4. Babel compile
* 5. Gzip and other Optimise
* */


module.exports = {
    entry: './public/js/main.js',
    // module: {
    //    rules: []
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My template',
            template: './public/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                minifyCSS: true
            }
        }),
        new CopyWebpackPlugin([
            {
                from: './public/img',
                to: 'img'
            },
            {
                from: './public/sprites',
                to: 'sprites'
            },
            {
                from: './public/levels',
                to: 'levels'
            }
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase:path.join(__dirname, "public"),
        compress: true,
        port: 8080
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    }
};