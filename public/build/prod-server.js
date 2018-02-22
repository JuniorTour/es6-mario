const path = require('path');
const serveStatic = require('serve-static');

const express = require('express');
const app = express();

// function serverStaticFile(req, res, next) {
//     console.log(req.originalUrl);
//     console.log(fs.existsSync(path.join(__dirname, '../dist' + req.originalUrl)));
//     if (fs.existsSync(path.join(__dirname, '../dist' + req.originalUrl))) {
//         res.sendFile(path.join(__dirname, '../dist' + req.originalUrl))
//     } else {
//         res.send()
//     }
//     // if (req.originalUrl === '/') {
//     //     res.sendFile(path.join(__dirname, '../dist/index.html'));
//     // } else {
//     // }
// }
//
// app.use((req, res, next) => {
//     serverStaticFile(req, res, next);
// });

// app.use(serveStatic(__dirname + "/dist"));

// Simple serve static package: https://www.npmjs.com/package/serve-static
app.use(serveStatic(path.join(__dirname, '../dist'), {'index': ['index.html', 'index.htm']}));

// Serve the files on port 3000.
app.listen(666, function () {
    console.log('Example app listening on port 3000!\n');
});
