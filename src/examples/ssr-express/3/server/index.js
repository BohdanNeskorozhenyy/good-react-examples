// Core
import express  from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

// Components
import { App } from '../components/App';

const app = express();

const distPath = `${path.resolve()}/src/examples/ssr-express/3/dist`;

app.get(/\.(js|css|map|ico|png|json)$/, express.static(path.resolve(__dirname, distPath)));

app.use('*', (req, res) => {
    let indexHTML = fs.readFileSync(path.resolve(__dirname, `${distPath}/index.html`), {
        encoding: 'utf8',
    });

    const appHTML = ReactDOMServer.renderToString(
        <StaticRouter location={ req.originalUrl }>
            <App />
        </StaticRouter>
    );

    indexHTML = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHTML}</div>`);

    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

app.listen('4000', () => {
    console.log('Express server started at http://localhost:4000');
});
