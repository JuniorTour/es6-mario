const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
*   After bundle with Babel transform runtime: bundle.js is 542kb,
*
*   https://github.com/webpack-contrib/compression-webpack-plugin/issues/63
*
* */

/*Compatibility
*
* 0. Before compiled by Babel, Only chrome-61+ (Mainly because of the Async Function).
* 1. After compiled by Babel,
*       firefox-47 worked perfect;
*       Edge-14 worked but cannot handle keyboard input;
*       IE11 still not work, with Error: Unhandled promise rejection ReferenceError: “fetch”未定义. Abandoned  IE.
*
*       Mobile:
*           Android:
*               7.0 - Samsung s7, working perfect and smooth.
 *              4.0 - Samsung ,
*           IOS:
*               9.3.2 - iPhone se, no screen, mainly because the fetch API.
*               Solved by add whatwg-fetch polyfill like below in entry property.
*               Worked but FPS is low.
*               11. 0.3 - iPhone 8, Run perfect, full FPS, even without fetch polyfill.*/


module.exports = {
    entry: ['whatwg-fetch', './public/js/main.js'],
    module: {
       rules: [
            {
               test: /\.js$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                   loader: 'babel-loader',
                   // When specific use babel loader,
                   // Webpack will automatically find the .babelrc file in the root path
                   // options: {
                   //     presets: ['babel-preset-env'],
                   //  Without babel-preset-env async function wont be compiled.
                   // See : https://babeljs.io/docs/usage/caveats/#polyfills
                   //     plugins: ['babel-plugin-transform-runtime']
                   // }
               }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url:false,
                                minimize: true,
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
           {
               test: /\.(png|svg|jpg|gif)$/,
               use: [
                   {
                       loader: 'file-loader',
                       options: {
                           // this path is relative to the output path
                           outputPath: './img'
                       }
                   }
               ]
           }
       ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['../dist'],
            {
                allowExternal: true
            }
        ),
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
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new ExtractTextPlugin({
            filename: 'css/styles.css'
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../',
        compress: true,
        port: 8080
    },
    output: {
        filename: 'bundle.js',
        // this path should be an absolute path!
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    }
};