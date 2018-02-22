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
*   Before bundle: bundle.js is 71kb,
*   After bundle without compress and uglify: bundle.js is 138kb,
*   After bundle with Balbel transform runtime: bundle.js is 542kb,
*
* */

/*Compatibility
* 0. Before compiled by Babel, chrome-61+ (Mainly because of the Async Function).
* 1. After compiled by Babel,
*       firefox-47 worked;
*       Edge-14 worked but cannot handle keyboard input;
*       IE11 still not work, with Error: Unhandled promise rejection ReferenceError: “fetch”未定义*/


module.exports = {
    entry: './public/js/main.js',
    module: {
       rules: [
           {
               test: /\.js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['babel-preset-env'],
                       /*Without babel-preset-env async function wont be compiled.*/
                       plugins: ['babel-plugin-transform-runtime']
                   }
               }
           }
       ]
    },
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