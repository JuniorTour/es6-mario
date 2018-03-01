const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin")


/*
* TODO-List
*
* Better Development, Better Compatibility, Better Perfomance
*
* 1. Copy assets file --- CopyWebpackPlugin
* 2. Compress/Optimise assets file --- ImageminPlugin
* 3. Dev Server --- Webpack Dev Server
* 4. Babel compile --- loader: 'babel-loader'
* 5. Gzip and other Optimise
*   Before bundle: bundle.js is 71kb,
*   After bundle without compress and uglify: bundle.js is 138kb,
*   After bundle with Babel transform runtime: bundle.js is 542kb,
*
*   When Almost ready to prod, bundle.js is 590kb now (2018/3/1),
*   After UglifyJs 77kb!!!
*   But with source map it is way more bigger 490kb.
*
*   https://github.com/webpack-contrib/compression-webpack-plugin/issues/63
*
* */


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
                from: './public/assets',
                to: 'assets'
            }
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
        new ExtractTextPlugin({
            filename: 'css/styles.css'
        }),
        new UglifyJSPlugin(
            {
                // sourceMap: true
                /*TODO: ENV
                * With sourceMap, the bundle is 490kb, otherwise 77kb.*/
            }
        )
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