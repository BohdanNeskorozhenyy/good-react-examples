// Core
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const distPath = `${path.resolve()}/src/examples/ssr-express/1/dist`;

app.get(/\.(js|css|map|ico|png|json)$/, express.static(path.resolve(__dirname, distPath)));

app.use('*', (req, res) => {
    const indexHTML = fs.readFileSync(path.resolve(__dirname, `${distPath}/index.html`), {
        encoding: 'utf8',
    });

    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

app.listen('4000', () => {
    console.log('Express server started at http://localhost:4000');
});
