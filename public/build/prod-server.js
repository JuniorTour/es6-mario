const path = require('path');

const express = require('express');
const app = express();
// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

// const config = require('./webpack.config.js');
// const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath
// }));

function serverStaticFile(req, res, next) {
    // console.log(req.originalUrl );
    if (req.originalUrl === '/') {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    } else {
        res.sendFile(path.join(__dirname, '../dist' + req.originalUrl))
    }
}

app.use((req, res, next) => {
    serverStaticFile(req, res, next);
});

// Serve the files on port 3000.
app.listen(666, function () {
    console.log('Example app listening on port 3000!\n');
});
